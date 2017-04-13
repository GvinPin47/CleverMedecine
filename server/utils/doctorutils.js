import mongoose from"mongoose";
mongoose.Promise = Promise;

import '../models/admin';
import {dbUri} from '../../etc/config.json';
const admin=mongoose.model('admin');

export function setUpConnection()
{ 
    mongoose.connect(dbUri);
}

export function listNodes(){
    return admin.find();
}
