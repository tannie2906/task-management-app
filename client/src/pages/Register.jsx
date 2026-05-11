import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        form
      );

      setMessage("✅ Registered successfully!");
      console.log(res.data);
      navigate("/login");

    } catch (err) {
      setMessage(
        err.response?.data?.message || "❌ Error registering user"
      );
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
    </div>
  );
}