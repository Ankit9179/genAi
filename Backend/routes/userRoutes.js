import express from "express";
import {
  userCreditsController,
  userLoginController,
  userRegistrationController,
} from "../controllers/userController.js";
import getToken from "../middleware/auth.js";

//router object
const userRouter = express.Router();

//routes
userRouter.post("/register", userRegistrationController);
userRouter.post("/login", userLoginController);
userRouter.post("/credits", getToken, userCreditsController);

export default userRouter;
