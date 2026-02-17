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
