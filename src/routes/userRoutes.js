import { Router } from "express";
import { getMe, login, register } from "../controllers/userControllers.js";

export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("login", login);
authRouter.get("/me", getMe);
