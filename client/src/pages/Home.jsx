import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">
        <h2 className="text-xl font-bold">Task Manager</h2>

        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-5xl font-bold mb-6">
          Organize Your Tasks Easily 🚀
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-xl">
          Manage your daily tasks, deadlines, and productivity all in one place.
        </p>

        <Link to="/register">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
            Get Started
          </button>
        </Link>

      </div>

    </div>
  );
}