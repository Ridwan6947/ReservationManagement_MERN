import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import {dbConnection} from "./connection/connectionMongo.js";
import { errorMiddleWare } from "./error/error.js";
import reservationRouter from "./route/reservationRoute.js";
import loginRouter from './route/loginRoute.js';
import registerRouter from './route/registerRoute.js'
import cookieParser from "cookie-parser";



const app = express();
dotenv.config({path: "./config/config.env"})
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser())
dbConnection();
app.use(errorMiddleWare);
app.use('/api/v1' , reservationRouter);
app.use('/api/v1', loginRouter);
app.use('/api/v1', registerRouter);

aoo.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

export default app;
