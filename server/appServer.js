import express from "express";
import bodyparser from "body-parser";
import {serverPort} from '../etc/config.json';
import * as db from './utils/doctorutils.js';
import cors from 'cors'

db.setUpConnection();

const app=express();

app.use(bodyparser.json());



app.use(cors({origin:'*'}));

app.get('/doctors', (req, res) => {
    db.listNodes().then(data=>res.send(data));
});


const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});

