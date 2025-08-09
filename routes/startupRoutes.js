import express from "express";
import {
  getAllStartups,
  createStartup,
  getStartupById,
  updateStartup,
  deleteStartup,
} from "../controllers/startupController.js";

import { protect, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllStartups);
router.post("/", protect, authorize("admin"), createStartup);

router.get("/:id", getStartupById);
router.put("/:id", protect, authorize("admin"), updateStartup);
router.delete("/:id", protect, authorize("admin"), deleteStartup);

export default router;
