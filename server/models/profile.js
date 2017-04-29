import mongoose from "mongoose";

const Schema=mongoose.Schema;
let Profile =mongoose.Schema({
     Firstname:{type:String},
    Lastname:{type:String},
    Email:{type:String},
    Phone:({type:String}),
    Sex:({type:String})
 },{collection:'Admin'});
 
export  const profile=mongoose.model('profile',Profile);