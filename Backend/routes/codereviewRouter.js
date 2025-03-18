import express from "express";
import { codeReviewController } from "../controllers/codereviewController.js";
import getToken from "../middleware/auth.js";

const codeRouter = express.Router();

codeRouter.post("/review", getToken, codeReviewController);

export default codeRouter;
