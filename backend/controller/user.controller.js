import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import loginModel from "../model/user.model.js";
configDotenv;

const Login = async (req, res) => {
  const credentials = req.body;

  try {
    const user = await loginModel.findOne({ email: credentials?.email });

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    if (user?.password !== credentials?.password) {
      return res.status(404).json({
        message: "password dosen't match!",
      });
    }

    const token = jwt.sign(
      { email: user?.email, id: user?._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    return res
      .cookie("access_token", token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json({
        email: user?.email,
        message: "Logged in successfully",
      });
  } catch (error) {
    return res.status(500).json({
      message: "Server error!",
    });
  }
};

const validateUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    // Your JWT verification logic here

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if (decoded) {
        req.user = decoded;
        next();
      } else {
        res.status(404).json({
          user: null,
          message: "unauthorize access detected!",
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

const getUserInfo = async (req, res, next) => {
  try {
    const { email } = req.user;
    const user = await loginModel.findOne({ email });
    if (user && user?._id) {
      return res.status(200).json({
        message: "Valid user!",
        data: user,
      });
    } else {
      return res.status(404).json({
        message: "User not valid!",
        data: user,
      });
    }
  } catch (error) {
    next(error);
  }
};

export { getUserInfo, Login, validateUser };
