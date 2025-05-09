const express = require('express');
const router = express.Router();
const {
  sendWasteRequest,
  getRequestsBySeller,
  getRequestsByRecycler,
  updateRequestStatus
} = require('../controllers/requestController');

router.post('/requests', sendWasteRequest);
router.get('/requests/industry/:email', getRequestsBySeller);
router.get('/requests/recycler/:company/:person', getRequestsByRecycler);
router.patch('/requests/:id', updateRequestStatus);

module.exports = router;
