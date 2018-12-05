const express = require('express');
const router = express.Router();
const Cab = require('../models/cab');

// Get all cabs
router.get('/', (req, res) => {
	console.log('Yo yo yo!');
	res.send({success: true});
});

router.post('/add', (req, res) => {
	Cab.create(req.body).then(cab => {
		res.send({ 
			success: true,
			data: cab 
		});
	});
});

// Export router
module.exports = router;
