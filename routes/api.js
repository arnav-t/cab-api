const express = require('express');
const router = express.Router();
const Cab = require('../models/cab');

// Get all cabs
router.get('/', (req, res) => {
	console.log('Yo yo yo!');
	res.send({success: true});
});

// Export router
module.exports = router;
