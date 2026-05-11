export const createProject = (req, res) => {
    const { name, role } = req.body;
  
    const newProject = {
      id: Date.now(),
      name,
      role,
    };
  
    res.status(201).json(newProject);
  };