const express = require('express');
const router = express.Router();
const Cab = require('../models/cab');

// Get all cabs
router.get('/', (req, res) => {
	console.log('Yo yo yo!');
	res.send({success: true});
});

// Add a cab
router.post('/add', (req, res) => {
	Cab.create(req.body).then(cab => {
		res.send({ 
			success: true,
			data: cab 
		});
	},
	reason => {
		res.status(422).send({
			success: false,
			error: reason.message
		});
	});
});

// Delete a cab
router.delete('/delete/:id', (req,res) => {
	Cab.findByIdAndRemove({_id: req.params.id}). then(cab => {
		if(cab !== null)
			res.send({
				success: true,
				data: cab
			});
		else
			res.status(404).send({
				success: false
			});
	});
})

// Export router
module.exports = router;
