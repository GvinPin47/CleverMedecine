import mongoose from"mongoose";
mongoose.Promise = Promise;

import '../models/admin';
import {dbUri} from '../../etc/config.json';
const admin=mongoose.model('admin');
var id='590173169da9d71e53962c58'

export function setUpConnection()
{ 
    mongoose.connect(dbUri);
}

export function listNodes(){
    return admin.find();
}

export function Profilelist()
{
    return admin.find();
}
