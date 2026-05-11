import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Tasks />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
  
      {/* DASHBOARD WRAPPER */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Overview />} />     {/* default page */}
        <Route path="tasks" element={<Tasks />} /> {/* /dashboard/tasks */}
        <Route path="projects" element={<Projects />} />
      </Route>
     
    </Routes>
  );
}

export default App;