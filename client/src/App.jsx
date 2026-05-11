import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";


function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      {/* DASHBOARD WRAPPER */}

      <Route path="/dashboard" element={<Dashboard />}>

        <Route index element={<Overview />} />

        <Route path="calendar" element={<Calendar />} />

        <Route path="projects" element={<Projects />} />

      </Route>

    </Routes>

  );

}

export default App;