import AdoptionRequest from '../models/AdoptionRequest.js';
import Animal from '../models/Animal.js';

export const createAdoptionRequest = async (req, res) => {
	try {
		const animal = await Animal.findById(req.params.id);

		if (!animal) {
			return res.status(404).json({ message: 'Animal not found.' });
		}

		const adoptionRequest = new AdoptionRequest({
			...req.body,
			animal: animal._id,
		});

		const savedRequest = await adoptionRequest.save();

		res.status(201).json({
			message: 'Adoption request submitted successfully.',
			request: savedRequest,
		});
	} catch (error) {
		if (error.name === 'ValidationError') {
			return res
				.status(400)
				.json({ message: 'Validation failed', errors: error.errors });
		}
		res.status(500).json({ message: 'Server error' });
	}
};

export const getAdoptionRequests = async (req, res) => {
	try {
		const requests = await AdoptionRequest.find()
			.populate('animal')
			.sort({ createdAt: -1 });

		res.json(requests);
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch adoption requests.' });
	}
};
