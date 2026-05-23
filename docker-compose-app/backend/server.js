import express from "express";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
const port = 5000;

// connect to postgres
const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "testdb",
  port: 5432,
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Backend is running 🚀",
      time: result.rows[0],
    });
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});