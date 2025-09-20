import { model, Schema } from "mongoose";

// Create Schema Structure
const userSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email is required for registration"],
    trim: true,
    lowerCase: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "password is must be atleast 6 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "seller"],
    default: "user",
  },
});

// Create model from schema

const User = model("User", userSchema);
export default User;
