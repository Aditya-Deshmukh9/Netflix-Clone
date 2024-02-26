import jwt from "jsonwebtoken";
import { User } from "../models/user-model.js";
import bcryptjs from "bcryptjs";

const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(200).json({
        message: "This user is already registered",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "registered successfully",
      success: true,
    });
  } catch (error) {
    throw error;
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(200).json({
        message: "Invalid Email and Password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).json({
        message: "Invalid Email and Password",
        success: false,
      });
    }

    const tokenData = {
      Id: user._id,
    };

    const token = await jwt.sign(tokenData, "akmoixsiowsaswOKSW", {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `${user.fullName} Login successful`,
        success: true,
      });
  } catch (error) {
    throw error;
  }
};

const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User Logout Successful",
      success: true,
    });
};

export { Register, Login, Logout };
