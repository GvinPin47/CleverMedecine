import mongoose from "mongoose";

const Schema=mongoose.Schema;

const Admin=new Schema({
    Firstname:{type:String},
    Lastname:{type:String},
    Email:{type:String},
    Phone:({type:String}),
    Sex:({type:String})
},{collection:'Admin'});

const admin=mongoose.model('admin',Admin);