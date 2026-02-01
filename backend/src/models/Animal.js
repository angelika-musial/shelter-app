import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		age: { type: Number, required: true },
		species: { type: String, enum: ['dog', 'cat'], required: true },
		breed: String,
		description: String,
		imageUrl: String,
		status: {
			type: String,
			enum: ['available', 'adopted'],
			default: 'available',
		},
	},
	{ timestamps: true },
);

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
