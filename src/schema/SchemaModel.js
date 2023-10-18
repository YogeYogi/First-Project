const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
		},
		des: {
			type: String,
		},
		empid: {
			type: String,
		},
		location: {
			city: {
				type: String,
			},
			street: {
				type: String,
			},

			pincode: {
				type: Number,
			},
		},
		gender: {
			type: String,
			enum: ['male', 'female', 'others'],
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('employeedetails', UserSchema);

module.exports = User;
