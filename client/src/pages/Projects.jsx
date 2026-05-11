import { useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([
    { name: "Hope", role: "UI/UX Design", progress: 50 },
    { name: "Core", role: "UX Research", progress: 50 },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const token = localStorage.getItem("token");

const addProject = async () => {

  if (!name || !role) return;

  try {

    const res = await axios.post(

      "http://localhost:8000/api/projects", // backend URL

      {

        name,

        role,

      },

      {

        headers: {

          Authorization: `Bearer ${token}`,

        },

      }

    );

    // update UI with new project from backend

    setProjects([...projects, res.data]);

    setName("");

    setRole("");

  } catch (err) {

    console.error(err);

  }

};

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-gray-500">Manage your ongoing work</p>
        </div>

        <button
          onClick={addProject}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Project
        </button>
      </div>

      {/* ADD FORM */}
      <div className="bg-white p-4 rounded-xl shadow flex gap-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project name"
          className="border p-2 rounded w-full"
        />

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role (e.g. UI Design)"
          className="border p-2 rounded w-full"
        />
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between">
              <h2 className="font-semibold text-lg">
                {project.name}
              </h2>
              <span className="text-sm text-gray-400">
                {project.progress}%
              </span>
            </div>

            <p className="text-gray-500 text-sm mt-1">
              {project.role}
            </p>

            <div className="mt-4">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}