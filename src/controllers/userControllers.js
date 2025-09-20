import bcrypt from "bcrypt";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email Id is Already Exist",
      });
    }
    // hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // create New User
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({
      message: "user registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
export const login = (req, res) => {};
export const getMe = (req, res) => {};
