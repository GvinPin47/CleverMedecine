import express from "express";
import bodyParser from "body-parser";
import {serverPort} from '../etc/config.json';
import * as db from './utils/doctorutils.js';
import cors from 'cors'
import jwt from "jsonwebtoken"


var passport = require("passport");
var passportJWT = require("passport-jwt");
var LocalStrategy =require('passport-local').Strategy;
var Admin =require('mongoose').model('admin')
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;


db.setUpConnection();
const app=express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors({origin:'*'}));


var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'kolidor';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  
  var Local=new LocalStrategy(function(username,userpassword,done)
  {
Admin.findOne({name:username},function(err,user)
{
    if(err)
    {return done(null,false,{message:'failed incorrect'})}
    if(!user)
    {return done (null,false,{message:'failed incorrect name'})}
    return done(null,user);
})

  })
});

passport.use(strategy);

app.post("/login", function(req, res) {
    
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }
  // usually this would be a database call:
  var user = Admin.findOne({name:name},function(err,user){
  if( ! user ){
    return res.status(401).json({message:"no such user found"});
    
  }
  
  if(user.password == req.body.password) {
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    var payload = {_id: user._id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});

  } else {
    res.status(401).json({message:"passwords did not match"})};
  })
  
});

app.get('/user', (req, res) => {
    db.listNodes().then(data=>res.send(data));
});

app.get('/profile', (req, res) => {
  db.Profilelist().then(data=>res.send(data));
})

app.post('/Changeprofile',(req,res)=>{
 
db.ProfileChange(req.body).then(data=>res.send(data))
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});

