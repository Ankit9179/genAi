import express from "express";
import {
  transactionControllerFunction,
  userCreditsController,
  userLoginController,
  userRegistrationController,
  verifyRazorPayPament,
} from "../controllers/userController.js";
import getToken from "../middleware/auth.js";

//router object
const userRouter = express.Router();

//routes
userRouter.post("/register", userRegistrationController);
userRouter.post("/login", userLoginController);
userRouter.get("/credits", getToken, userCreditsController);
userRouter.post("/pay-rozer", getToken, transactionControllerFunction);
userRouter.post("/verify-rozer", getToken, verifyRazorPayPament);

export default userRouter;
