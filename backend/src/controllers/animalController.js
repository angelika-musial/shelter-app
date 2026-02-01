import Animal from '../models/Animal.js';

export const getAnimals = async (req, res) => {
	try {
		const animals = await Animal.find();
		res.json(animals);
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch animals.' });
	}
};

export const createAnimal = async (req, res) => {
	try {
		const animal = new Animal(req.body);
		const savedAnimal = await animal.save();
		res.status(201).json(savedAnimal);
	} catch (error) {
		res.status(400).json({ message: 'Failed to create an animal.' });
	}
};
