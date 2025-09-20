// IMPORT PACKAGES
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/models/db.js";

dotenv.config(); //Load environment variables from .env
const app = express(); // create express app

app.use(cors()); // enable cross-origin requests
app.use(express.json()); // Parse JSON Request Body

app.get("/", (req, res) => {
  console.log("AUCTION-PLATFORM application is Running");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Application Running in port ${PORT}`);
    connectDB();
});
