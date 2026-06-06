const pool = require("../db");

const signup = async (req, res) => {
  try {
    const { name, email, address, password } = req.body;

    await pool.query(
      `INSERT INTO users(name, email, address, password)
       VALUES($1, $2, $3, $4)`,
      [name, email, address, password]
    );

    res.json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Signup failed",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      `SELECT * FROM users
       WHERE email = $1 AND password = $2`,
      [email, password]
    );

    if (result.rows.length > 0) {
      res.json({
        message: "Login Successful",
      });
    } else {
      res.status(401).json({
        message: "Invalid Email or Password",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Login failed",
    });
  }
};

module.exports = { signup, login };