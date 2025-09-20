// IMPORT PACKAGES
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/models/db.js";
import { errorHandler } from "./src/controllers/errorHandler.js";
import { authRouter } from "./src/routes/userRoutes.js";

dotenv.config(); //Load environment variables from .env
const app = express(); // create express app
app.use("/api", authRouter);

app.use(cors()); // enable cross-origin requests
app.use(express.json()); // Parse JSON Request Body

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toLocaleString());
  next();
});
app.get("/", (req, res) => {
  console.log("AUCTION-PLATFORM application is Running"); //test route
});

app.use(errorHandler);

const PORT = process.env.PORT || 2018;

app.listen(PORT, () => {
  console.log(`Application Running in port ${PORT}`);
  connectDB();
});
