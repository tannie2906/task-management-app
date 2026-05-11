import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { pool } from "./config/db.js";
import authRoutes from "./route/authRoutes.js";
import taskRoutes from "./route/taskRoutes.js";
import projectRoutes from "./route/projectRoutes.js";

const app = express();

console.log("🔥 SERVER IS STARTING");
// debug middleware (optional)

app.use((req, res, next) => {
  console.log("👉 REQUEST RECEIVED:", req.method, req.url);
  next();
});



app.use( //connect with frontend
  cors( {
    origin: "http://localhost:5173",
    credentials: true,
  })
);  

app.use(express.json());

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("DB connection failed ❌", err);
  } else {
    console.log("DB connected ✅", res.rows);
  }
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api", projectRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

app.get("/test", (req, res) => {
  res.send("API works");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
