import express from "express";
import {
  getAllStartups,
  createStartup,
  getStartupById,
  updateStartup,
  deleteStartup,
} from "../controllers/startupController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllStartups);
router.post("/", protect, authorizeRoles("admin"), createStartup);

router.get("/:id", getStartupById);
router.put("/:id", protect, authorizeRoles("admin"), updateStartup);
router.delete("/:id", protect, authorizeRoles("admin"), deleteStartup);

export default router;
