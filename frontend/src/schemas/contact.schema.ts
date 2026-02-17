import { z } from 'zod';

export const contactSchema = z.object({
	fullName: z.string().min(3, 'Full name must be at least 3 characters'),

	email: z
		.email('Please enter a valid email address')
		.min(1, 'Email is required'),

	subject: z.string().min(2, 'Subject is required'),

	message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
