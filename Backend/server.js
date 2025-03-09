import express from "express";
import cors from "cors";
import dotend from "dotenv";
import connectionDBFuntion from "./config/mongoDB.js";

dotend.config();
const PORT = process.env.PORT || 4000;
const app = express();

//calling mongo function
connectionDBFuntion();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("hello from server"));

app.listen(PORT, () => console.log(`server is running ${PORT}`));
