const db = require('../config/db');

// Send new waste request (Industry -> Recycler)
exports.sendWasteRequest = (req, res) => {
  const { seller_email, waste_type, recycler_company, recycler_person } = req.body;

  console.log("Incoming data:", req.body);

  const sql = `INSERT INTO waste_requests (seller_email, waste_type, recycler_company, recycler_person, status)
               VALUES (?, ?, ?, ?, 'Pending')`;

  db.query(sql, [seller_email, waste_type, recycler_company, recycler_person], (err, result) => {
    if (err) {
      console.error('Error inserting waste request:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, message: 'Request sent successfully' });
  });
};

// Get requests made by a seller (industry)
exports.getRequestsBySeller = (req, res) => {
  const { email } = req.params;

  const sql = `SELECT * FROM waste_requests WHERE seller_email = ?`;

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error('Error fetching requests:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, data: result });
  });
};

// Get requests assigned to a recycler
exports.getRequestsByRecycler = (req, res) => {
  const { company, person } = req.params;

  const sql = `SELECT * FROM waste_requests WHERE recycler_company = ? AND recycler_person = ?`;

  db.query(sql, [company, person], (err, result) => {
    if (err) {
      console.error('Error fetching recycler requests:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, data: result });
  });
};

// Update request status (Accepted / Rejected)
exports.updateRequestStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sql = `UPDATE waste_requests SET status = ? WHERE id = ?`;

  db.query(sql, [status, id], (err, result) => {
    if (err) {
      console.error('Error updating request status:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, message: 'Request status updated' });
  });
};
