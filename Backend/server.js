import dotend from "dotenv/config";
import express from "express";
import cors from "cors";
import connectionDBFuntion from "./config/mongoDB.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

//calling mongo function
connectionDBFuntion();

app.use(express.json());
app.use(cors());

//apis
app.use("/api/v1/user", userRouter);
app.use("/api/v1/image", imageRouter);
app.get("/", (req, res) => res.send("hello from server"));

app.listen(PORT, () => console.log(`server is running ${PORT}`));
