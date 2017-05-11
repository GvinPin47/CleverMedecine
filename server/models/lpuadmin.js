import mongoose from "mongoose";

const Schema=mongoose.Schema;

const Lpu_Admin=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Number:{type:String},
     LpuAdminData:{
           _id:mongoose.Schema.Types.ObjectId,
         Name:{type:String},
         Lastname:{type:String},
         Lpu:{type:String}
     }
},{collection:'Lpu_Admin'});

 export const lpuadmin=mongoose.model('lpuadmin',Lpu_Admin)