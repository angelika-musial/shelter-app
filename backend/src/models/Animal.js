import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Animal name is required'],
			trim: true,
			minlength: 2,
		},
		age: { type: Number, required: true, min: 0 },
		species: { type: String, enum: ['dog', 'cat', 'other'], required: true },
		breed: {
			type: String,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			minlength: 10,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		adoptionStatus: {
			type: String,
			enum: ['available', 'adopted'],
			default: 'available',
		},
	},
	{ timestamps: true },
);

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
