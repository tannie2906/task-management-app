// Add a loading state to prevent double-clicks
const [isLoading, setIsLoading] = useState(false);
const [isOpen, setIsOpen] = useState(false); // Controls modal visibility

const addProject = async () => {
  if (!name || !role) return;
  setIsLoading(true);

  try {
    const res = await axios.post(
      "http://localhost:8000/api/projects",
      { name, role, progress: 0 }, // Initialize new projects at 0%
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setProjects([...projects, res.data]);
    
    // RESET & CLOSE
    setName("");
    setRole("");
    setIsOpen(false); 
    alert("Project created successfully!");
  } catch (err) {
    console.error("Error adding project:", err);
    alert("Failed to add project. Check your connection.");
  } finally {
    setIsLoading(false);
  }
};