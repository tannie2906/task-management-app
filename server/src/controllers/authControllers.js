import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js"


//REGISTER USER
export const register = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // check if user exists
      const userExists = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
  
      if (userExists.rows.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // insert user
      const newUser = await pool.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [username, email, hashedPassword]
      );
  
      // create token
      const token = jwt.sign(
        { userId: newUser.rows[0].id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
  
      res.json({
        token,
        user: {
          id: newUser.rows[0].id,
          username: newUser.rows[0].username,
          email: newUser.rows[0].email,
        },
      });
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };    

// LOGIN
export const login = async (req, res) => {

    try {
  
      const { email, password } = req.body;
  
      // check user exists
  
      const user = await pool.query(
  
        "SELECT * FROM users WHERE email = $1",
  
        [email]
  
      );
  
      if (user.rows.length === 0) {
  
        return res.status(400).json({ message: "Invalid credentials" });
  
      }
  
      // check password
  
      const validPassword = await bcrypt.compare(
  
        password,
  
        user.rows[0].password
  
      );
  
      if (!validPassword) {
  
        return res.status(400).json({ message: "Invalid credentials" });
  
      }
  
      // create token
  
      const token = jwt.sign(
  
        { userId: user.rows[0].id },
  
        process.env.JWT_SECRET,
  
        { expiresIn: "1d" }
  
      );
  
      res.json({
  
        token,
  
        user: {
  
          id: user.rows[0].id,
  
          username: user.rows[0].username,
  
          email: user.rows[0].email,
  
        },
  
      });
  
    } catch (err) {
  
      res.status(500).json({ message: err.message });
  
    }
  
  };