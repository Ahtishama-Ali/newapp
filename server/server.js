import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRouter from './http/routes/todoRouter.js';
import userRouter from './http/routes/userRouter';
import bodyParser from 'body-parser';
// import session from "express-session";

const app = express();

// dotenv
dotenv.config();
const port = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(logger());
app.use(express.json());
app.use(bodyParser.json())

// mongoose
const db = process.env.MONGO
mongoose.connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("the database connection successfully established"))


// routes
app.use('/api', todoRouter);
app.use('/api', userRouter);



app.listen(port, () => console.log(`server running on port ${port}`));