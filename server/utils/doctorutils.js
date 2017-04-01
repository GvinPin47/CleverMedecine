import mongoose from"mongoose";
mongoose.Promise = Promise;

import '../models/doctors';
import {dbUri} from '../../etc/config.json';
const doctor=mongoose.model('doctor');

export function setUpConnection()
{ 
    mongoose.connect(dbUri);
}

export function listNodes(){
    return doctor.find();
}
