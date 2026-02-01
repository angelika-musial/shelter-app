import Animal from '../models/Animal.js';

export const getAnimals = async (req, res) => {
	try {
		const animals = await Animal.find().sort({ createdAt: -1 });
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
		if (error.name === 'ValidationError') {
			return res.status(400).json({
				message: 'Validation failed',
				errors: error.errors,
			});
		}
		res.status(500).json({ message: 'Server error' });
	}
};

export const getAnimalById = async (req, res) => {
	try {
		const animal = await Animal.findById(req.params.id);

		if (!animal) {
			return res.status(404).json({ message: 'Animal not found' });
		}

		res.json(animal);
	} catch (error) {
		res.status(400).json({ message: 'Invalid animal ID' });
	}
};

export const updateAnimal = async (req, res) => {
	try {
		const animalId = req.params.id;
		const updatedAnimal = await Animal.findByIdAndUpdate(animalId, req.body, {
			new: true,
			runValidators: true,
		});

		if (!updatedAnimal) {
			return res.status(404).json({ message: 'Animal not found' });
		}

		res.json(updatedAnimal);
	} catch (error) {
		if (error.name === 'ValidationError') {
			return res.status(400).json({
				message: 'Validation failed',
				errors: error.errors,
			});
		}

		res.status(400).json({ message: 'Invalid request' });
	}
};

export const deleteAnimal = async (req, res) => {
	try {
		const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);

		if (!deletedAnimal) {
			return res.status(404).json({ message: 'Animal not found' });
		}

		res.json({ message: 'Animal deleted.' });
	} catch (error) {
		res.status(400).json({ message: 'Invalid animal ID' });
	}
};
