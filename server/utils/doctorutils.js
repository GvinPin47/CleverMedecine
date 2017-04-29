import mongoose from"mongoose";
mongoose.Promise = Promise;

import '../models/admin';
import '../models/profile';
import {dbUri} from '../../etc/config.json';


const admin=mongoose.model('admin');
const profile=mongoose.model('profile')



var _id='590173169da9d71e53962c58' //Profile

export function setUpConnection()
{ 
    mongoose.connect(dbUri);
}

export function listNodes(){
    return admin.find();
}

export function Profilelist()
{
    return profile.find();
}
export function ProfileChange(data){
    return profile.findById(_id).update(data)
}
