import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        form
      );

      // save token
      localStorage.setItem("token", res.data.token);
      setMessage("✅ Login successful!");
      console.log(res.data);
      navigate("/Dashboard");

  
    } catch (err) {

      setMessage(
        err.response?.data?.message || "❌ Login failed"
      );
    }
  };

  return (

    <div className={styles.container}>

      <div className={styles.card}>

        <h1 className={styles.title}>Login</h1>

        <form onSubmit={handleSubmit}>

          <input

            className={styles.input}

            type="email"

            name="email"

            placeholder="Enter email"

            value={form.email}

            onChange={handleChange}

            required

          />

          <input

            className={styles.input}

            type="password"

            name="password"

            placeholder="Enter password"

            value={form.password}

            onChange={handleChange}

            required

          />

          <button className={styles.button} type="submit">

            Login

          </button>

        </form>

        <p className={styles.message}>{message}</p>

        <p className={styles.linkText}>

          Don't have an account? <Link to="/register">Register</Link>

        </p>

      </div>

    </div>

  );

}