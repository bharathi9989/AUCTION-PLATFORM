import { Router } from "express";
import { getMe, login, register } from "../controllers/userControllers.js";

export const userRouter = Router();

userRouter.post("/register", register);
userRouter.get("/login", login);
userRouter.get("/me", getMe);
