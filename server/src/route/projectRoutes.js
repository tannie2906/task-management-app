import express from "express";
import { createProject } from "../controllers/projectController.js";

const router = express.Router();

router.post("/projects", createProject);

export default router;