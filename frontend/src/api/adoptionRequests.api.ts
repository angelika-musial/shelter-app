import { type CreateAdoptionRequest } from '../types/adoption.types';

export const createAdoptionRequest = async (
	animalId: string,
	data: CreateAdoptionRequest,
) => {
	const response = await fetch(
		`http://localhost:5000/api/animals/${animalId}/adoption-requests`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		},
	);

	if (!response.ok) {
		throw new Error('Failed to submit adoption request');
	}

	return response.json();
};
