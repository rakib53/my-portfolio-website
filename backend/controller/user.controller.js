import { configDotenv } from "dotenv";
import loginModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
configDotenv;

const Login = async (req, res) => {
  const user = await loginModel.findOne({ email: req?.body?.email });
  if (user) {
    const token = jwt.sign(
      {
        email: user?.email,
        password: user?.password,
      },
      process.env.JWT
    );
    if (token) {
      res
        .cookie("access_token", token, {
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: true,
        })
        .status(200)
        .json({
          email: user?.email,
          message: "Logged in successfully",
        });
    }
  }
};

const validateUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const jwtVerify = jwt.verify(token, process.env.JWT);
    if (jwtVerify?.email) {
      const user = await loginModel.findOne({ email: jwtVerify?.email });
      if (user) {
        res.status(200).json({
          user: user,
          message: "Valid user",
        });
      } else {
        res.status(404).json({
          user: {},
          message: "unauthorize access detected!",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

export { Login, validateUser };
