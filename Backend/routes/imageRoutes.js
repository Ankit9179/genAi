import express from "express";
import { generateImageController } from "../controllers/imageController.js";
import getToken from "../middleware/auth.js";

const imageRouter = express.Router();

imageRouter.post("/generate-image", getToken, generateImageController);

export default imageRouter;
