import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";
import transactionModel from "../models/transactionModels.js";
console.log(process.env.PORT);

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

//for payment and transaction
const rasorpayInstance = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY,
  key_secret: process.env.RAZOR_PAY_SECRET_KEY,
});

const transactionControllerFunction = async (req, res) => {
  const { userId, planId } = req.body;
  console.log(userId, planId);
  try {
    if (!userId || !planId) {
      return res.json({ success: false, message: "Missing Detailssss" });
    }
    let credits, amount, plan, date;
    switch (planId) {
      case "Basic":
        plan = "Basic";
        credits = 100;
        amount = 10;
        break;

      case "Advance":
        plan = "Advance";
        credits = 200;
        amount = 50;
        break;

      case "Business":
        plan = "Business";
        credits = 250;
        amount = 100;
        break;

      default:
        return res.json({ success: false, message: "Plan not found" });
    }

    date = Date.now();

    const transactionData = {
      plan,
      amount,
      credits,
      date,
      userId,
    };

    //save transaction in mongodb
    const newTransaction = await transactionModel.create(transactionData);

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTransaction._id,
    };

    //create order
    await rasorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//razor pay verify
const verifyRazorPayPament = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await rasorpayInstance.orders.fetch(razorpay_order_id);
    if (orderInfo.status === "paid") {
      const transactionVerifyData = await transactionModel.findById(
        orderInfo.receipt
      );
      if (transactionVerifyData.payment) {
        return res.json({ success: false, message: "Transacrion failed" });
      }
      const userData = await userModel.findById(transactionVerifyData.userId);
      const newCreditsBalance =
        userData.creditBalance + transactionVerifyData.credits;
      await userModel.findByIdAndUpdate(userData._id, {
        creditBalance: newCreditsBalance,
      });
      await transactionModel.findByIdAndUpdate(transactionVerifyData._id, {
        payment: true,
      });
      res.json({ success: true, message: "Credits Added" });
    } else {
      res.json({ success: false, message: "Credits Faild" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  userRegistrationController,
  userLoginController,
  userCreditsController,
  transactionControllerFunction,
  verifyRazorPayPament,
};
