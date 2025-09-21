import { Router } from "express";
import { getMe, login, register } from "../controllers/userControllers.js";

export const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("login", login);
userRouter.get("/me", getMe);
