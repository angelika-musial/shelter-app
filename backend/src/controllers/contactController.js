import ContactMessage from '../models/ContactMessage.js';

export const createContactMessage = async (req, res) => {
	try {
		const message = new ContactMessage(req.body);
		const savedMessage = await message.save();

		res.status(201).json({
			message: 'Message sent successfully',
			data: savedMessage,
		});
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

export const getContactMessages = async (req, res) => {
	try {
		const messages = await ContactMessage.find().sort({ createdAt: -1 });

		res.json(messages);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};

export const markContactAsRead = async (req, res) => {
	try {
		const message = await ContactMessage.findByIdAndUpdate(
			req.params.id,
			{ status: 'read' },
			{ new: true },
		);

		if (!message) {
			return res.status(404).json({ message: 'Message not found' });
		}

		res.json(message);
	} catch (error) {
		res.status(400).json({ message: 'Invalid ID' });
	}
};
