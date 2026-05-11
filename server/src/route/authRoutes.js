import express from "express";
import { register, login } from "../controllers/authControllers.js";

const router = express.Router();

// debug ONLY once
router.post("/register", (req, res, next) => {
  console.log("REGISTER ROUTE HIT");
  next();
}, register);

router.post("/login", login);
router.post("/register", register);

export default router;