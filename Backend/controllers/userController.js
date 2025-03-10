import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRegistrationController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing details",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const useData = {
      name,
      email,
      password: hashedPassword,
    };
    //new user with the help of user model
    const newUser = new userModel(useData);
    //save user in db and it will return user
    const user = await newUser.save();

    //generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.json({ success: true, token, user: { name: user.name } });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        success: false,
        message: "Missing details",
      });
    }
    //email check in db and it will return a user
    const isUser = await userModel.findOne({ email });
    if (!isUser) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }
    //match password
    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Wrong password",
      });
    } else {
      //generate token
      const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });
      res.json({ success: true, token, user: { name: isUser.name } });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const userCreditsController = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  userRegistrationController,
  userLoginController,
  userCreditsController,
};
