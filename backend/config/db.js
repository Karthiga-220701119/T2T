// backend/config/db.js

const mysql = require('mysql2');

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',        // XAMPP MySQL runs on localhost
  user: 'root',             // default username in XAMPP
  password: '',             // default password is empty in XAMPP
  database: 'waste_management', // your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL Database waste_management');
});

// Export the connection
module.exports = db;
