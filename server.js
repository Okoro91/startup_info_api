import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import startupRoutes from "./routes/startupRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the Startup Info API! Access /api/startups for data.");
});

app.use("/api/startups", startupRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1);
  });
