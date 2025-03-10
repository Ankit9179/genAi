import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Autorized. Please Login Againn",
      });
    }
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(tokenDecoded);
    if (!tokenDecoded.id) {
      return res.json({
        success: false,
        message: "Not Autorized. Please Login Again",
      });
    }
    req.body.userId = tokenDecoded.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default getToken;
