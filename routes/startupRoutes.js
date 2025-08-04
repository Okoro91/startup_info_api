import express from "express";
import {
  getAllStartups,
  createStartup,
  getStartupById,
  updateStartup,
  deleteStartup,
} from "../controllers/startupController.js";

const router = express.Router();

router.get("/", getAllStartups);
router.post("/", createStartup);

router.get("/:id", getStartupById);
router.put("/:id", updateStartup);
router.delete("/:id", deleteStartup);

export default router;
