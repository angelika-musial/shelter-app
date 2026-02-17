import { type ContactFormData } from '../schemas/contact.schema';

export const sendContactMessage = async (data: ContactFormData) => {
	const response = await fetch('http://localhost:5000/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error('Failed to send message');
	}

	return response.json();
};
