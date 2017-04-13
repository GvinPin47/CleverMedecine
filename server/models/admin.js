import mongoose from "mongoose";

const Schema=mongoose.Schema;

const Admin=new Schema({
    name:{type:String},
    password:{type:Number}
},{collection:'Admin'});

const admin=mongoose.model('admin',Admin);