const bcrypt = require("bcryptjs");
const db = require("../config/db");

// Register Controller
const register = async (req, res) => {
  const { name, company, email, password, role } = req.body;

  try {
    const [existingUser] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return res.json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.promise().query(
      "INSERT INTO users (name, company, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [name, company, email, hashedPassword, role]
    );

    res.json({ success: true, message: "User registered" });
  } catch (err) {
    console.error("Register error:", err);
    res.json({ success: false, message: "Server error" });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Fetch user from database
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ success: false, message: "Server error" });
      }

      if (result.length === 0) {
        return res.status(401).json({ success: false, message: "User not found" });
      }

      const user = result[0];

      // 🚫 Role mismatch check
      if (user.role !== role) {
        return res.status(403).json({
          success: false,
          message: `This account is not registered as a ${role}.`,
        });
      }

      // Check if PASSWORD exists
      if (!user.PASSWORD) {
        return res.status(401).json({ success: false, message: "User has no password stored" });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.PASSWORD);

      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid password" });
      }

      // Login successful
      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          name: user.NAME,
          email: user.email,
          role: user.role,
          company_name: user.company,
        },
      });
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  login,
};

module.exports = { register, login };
