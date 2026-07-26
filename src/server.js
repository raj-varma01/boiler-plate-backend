import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { db_connect } from "./configs/db";

dotenv.config();

const app = express();
const port = process.env.PORT || '5001';

app.use(cors());
app.use(express.json());

//routes


//middlewares


(async () => {
    await db_connect();
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    })
})();