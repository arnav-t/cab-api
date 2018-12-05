const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
	startTime: Date,
	endTime: Date
});

const CabSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	phone: {
		type: String,
		required: [true, 'Phone is required']
	},
	email: {
		type: String,
		required: [true, 'Email is required']
	},
	source: {
		type: String,
		required: [true, 'Source is required']
	},
	dest: {
		type: String,
		required: [true, 'Destination is required']
	},
	slot: {
		type: SlotSchema,
		required: [true, 'Slot is required']
	},
	desc: {
		type: String,
		required: [false]
	}
});

const Cab = mongoose.model('cab', CabSchema); 