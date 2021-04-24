import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from 'morgan';
import * as cors from 'cors'

import courses from './routes/courses.routes'
import ratings from './routes/ratings.routes'

import { errorHandler } from './utils'

const PORT = Number(process.env.PORT) || 3000;

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    app.use(morgan(':date[web] :method :url :status - :response-time ms'));

    app.use('/api/v1/courses', courses)
    app.use('/api/v1/ratings', ratings)

    app.use(errorHandler);

    app.listen(PORT);

    console.log("Express server has started on port 5000");

}).catch(error => console.log(error));
