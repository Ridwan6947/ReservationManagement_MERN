import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./connection/connectionMongo.js";
import { errorMiddleWare } from "./error/error.js";
import reservationRouter from "./route/reservationRoute.js";
import loginRouter from './route/loginRoute.js';
import registerRouter from './route/registerRoute.js'



const app = express();
dotenv.config({path: "./config/config.env"})


app.use(cors());
app.use(express.json());
dbConnection();
app.use(errorMiddleWare);
app.use('/api/v1/reservatrion' , reservationRouter);
app.use('/api/v1', loginRouter);
app.use('/api/v1', registerRouter);

export default app;