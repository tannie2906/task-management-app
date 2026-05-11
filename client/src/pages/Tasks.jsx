import { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  // fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, []);

  // add task
  const addTask = async () => {
    if (!title) return;

    const res = await axios.post(
      "http://localhost:8000/api/tasks",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setTasks([...tasks, res.data]);
    setTitle("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Tasks</h2>

      {/* ADD TASK */}
      <input
        value={title}
        placeholder="Add task..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {/* TASK LIST */}
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}