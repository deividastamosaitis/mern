 import express from 'express';
 import cors from 'cors';
 import mongoose from 'mongoose';

 import { userRouter } from "./routes/users.js";

 const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);

mongoose.connect("mongodb+srv://wcoklet:Password123@recipes.3sbs8bq.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log("Server started!");
})