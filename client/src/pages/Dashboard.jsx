import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="grid grid-cols-[220px_1fr_280px] h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="bg-slate-900 text-white p-5 flex flex-col">
        <h2 className="text-xl font-bold mb-8">Tasky.io</h2>

        <nav className="flex flex-col gap-3">
          <button onClick={() => navigate("/dashboard")} className="text-left hover:bg-slate-700 p-2 rounded">
            Dashboard
          </button>

          <button onClick={() => navigate("/dashboard/tasks")} className="text-left hover:bg-slate-700 p-2 rounded">
            Tasks
          </button>

          <button onClick={() => navigate("/dashboard/projects")} className="text-left hover:bg-slate-700 p-2 rounded">
            Projects
          </button>

        </nav>

        <button
          onClick={logout}
          className="mt-auto bg-red-500 hover:bg-red-600 p-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="p-6 overflow-y-auto">
        <Outlet />
      </main>

      {/* RIGHT PANEL */}
      <aside className="bg-white p-5 border-l">

        <div className="text-center">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="rounded-full mx-auto mb-3"
          />
          <h3 className="font-semibold">Mirha Fatima</h3>
          <p className="text-sm text-gray-500">UI/UX Designer</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="bg-blue-500 text-white p-4 rounded-lg">
            50%+ Projects
          </div>

          <div className="bg-blue-400 text-white p-4 rounded-lg">
            50%+ Tasks
          </div>
        </div>

      </aside>
    </div>
  );
}