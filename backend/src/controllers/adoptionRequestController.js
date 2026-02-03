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
		const filter = {};

		if (req.query.status) {
			filter.status = req.query.status;
		}

		const requests = await AdoptionRequest.find(filter)
			.populate('animal')
			.sort({ createdAt: -1 });

		res.json(requests);
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch adoption requests.' });
	}
};

export const updateAdoptionRequestStatus = async (req, res) => {
	try {
		const { status } = req.body;

		if (!['approved', 'rejected'].includes(status)) {
			return res.status(400).json({ message: 'Invalid status value' });
		}

		const request = await AdoptionRequest.findById(req.params.id).populate(
			'animal',
		);

		if (!request) {
			return res.status(404).json({ message: 'Adoption request not found' });
		}

		request.status = status;

		if (status === 'approved') {
			request.animal.adoptionStatus = 'adopted';
			await request.animal.save();
		}

		await request.save();

		res.json({
			message: `Adoption request ${status}`,
			request,
		});
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};
