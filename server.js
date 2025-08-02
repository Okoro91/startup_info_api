import express from "express";
import mongoose from "mongoose";
import Startup from "./models/startup.js";

const app = express();
const PORT = 3500;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Startup Info API");
});

app.get("/api/startup", async (req, res) => {
  try {
    const startup = await Startup.find({});
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/startup:id", async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await Startup.findById(id);
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/startup", async (req, res) => {
  try {
    const startup = await Startup.create(req.body);
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://okoro91:Mifracri91@startupdb.vmryvoy.mongodb.net/startup-api?retryWrites=true&w=majority&appName=startupDB"
  )
  .then(() => console.log("Connected to the database!"))
  .catch(() => {
    console.log("connection error");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
