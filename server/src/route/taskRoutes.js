import express from "express";

const router = express.Router();

// TEMP in-memory tasks (for now)
let tasks = [];

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// CREATE task
router.post("/", (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.json(newTask);
});

// DELETE task
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  tasks = tasks.filter((t) => t.id != id);

  res.json({ message: "Deleted" });
});

// TOGGLE complete
router.put("/:id", (req, res) => {
  const { id } = req.params;

  tasks = tasks.map((t) =>
    t.id == id ? { ...t, completed: !t.completed } : t
  );

  res.json({ message: "Updated" });
});

export default router;