import mongoose from "mongoose";

const Schema=mongoose.Schema;

const Noteschema=new Schema({
    name:{type:String},
    lastname:{type:String}
},{collection:'Noteschema'});

const Doctor=mongoose.model('doctor',Noteschema);