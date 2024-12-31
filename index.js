import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";

const app = new express();

app.use(bodyParser.json())
dotenv.config()
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(() => {
    console.log('DataBase Connected successfull');
    app.listen(PORT, () => {
        console.log(`Server is runing on port ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
});

app.use('/api/user', route);