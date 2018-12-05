const express = require('express');
const router = express.Router();
const Cab = require('../models/cab');

// Get all cabs
router.get('/', (req, res) => {
	Cab.find({}).then(cabs => {
		res.send({
			success: true,
			data: cabs
		});
	});
});

// Get cabs with given time in the slot
router.get('/search', (req,res) => {
	let time = Date.parse(req.query.time);
	
	Cab.find({
		$and : [
			{ "slot.startTime" : { $lte : time } },
			{ "slot.endTime" : {$gte : time} }
		]
	}).exec((_err, cabs) => {
		res.send({
			success: true,
			data: cabs
		});
	});
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
	Cab.findByIdAndRemove({_id: req.params.id}).then(cab => {
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
});

// Update a cab
router.put('/update/:id', (req,res) => {
	Cab.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(cab => {
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
});

// Export router
module.exports = router;
