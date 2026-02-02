import mongoose from 'mongoose';

const adoptionRequestSchema = new mongoose.Schema(
	{
		animal: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Animal',
			required: true,
		},
		fullName: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			trim: true,
			lowercase: true,
			match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
		},
		phone: {
			type: String,
			required: true,
			trim: true,
		},
		message: {
			type: String,
			required: true,
			minlength: 10,
		},
		status: {
			type: String,
			enum: ['pending', 'approved', 'rejected'],
			default: 'pending',
		},
	},
	{ timestamps: true },
);

const AdoptionRequest = mongoose.model(
	'AdoptionRequest',
	adoptionRequestSchema,
);

export default AdoptionRequest;
