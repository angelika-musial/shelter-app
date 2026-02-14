import { z } from 'zod';

export const adoptionSchema = z.object({
	fullName: z.string().min(3, 'Full name must be at least 3 characters'),

	email: z
		.email('Please enter a valid email address')
		.min(1, 'Email is required'),

	phone: z
		.string()
		.min(9, 'Phone number is too short')
		.regex(/^\+?[0-9\s-]+$/, 'Invalid phone number'),

	message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type AdoptionFormData = z.infer<typeof adoptionSchema>;
