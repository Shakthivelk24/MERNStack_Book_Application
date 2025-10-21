import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./db.js";
import bookRouter from "./route/book.route.js";
import userRouter from "./route/user.route.js";

const app = express();
 app.use(cors());
 app.use(express.json()); 

connectDB();

app.use('/book', bookRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
