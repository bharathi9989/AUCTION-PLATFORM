import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);

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
    const token = generateToken({ id: newUser._id, role: newUser.role });
    res.status(201).json({
      message: "user registered successfully",
      token,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check if user Exist
    const user = await User.findOne({ email });
    if (!email) return res.status(400).json({ message: "User not Found" });

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    // Genarate JWT token
    const token = generateToken({ id: newUser._id, role: newUser.role });
    res.status(200).json({
      message: "user Login Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Invalid user Credential",
    });
  }
};
export const getMe = (req, res) => {};
