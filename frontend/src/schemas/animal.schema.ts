import { z } from 'zod';

export const animalSchema = z.object({
	name: z.string().trim().min(2, 'Name must be at least 2 characters'),
	age: z
		.string()
		.min(1, 'Age is required')
		.transform((val) => Number(val))
		.refine((val) => !isNaN(val), {
			message: 'Age must be a number',
		})
		.refine((val) => val >= 0, {
			message: 'Age cannot be negative',
		}),
	species: z
		.string()
		.min(1, 'Species is required')
		.refine((val) => ['dog', 'cat', 'other'].includes(val), {
			message: 'Invalid species',
		}) as z.ZodType<'dog' | 'cat' | 'other'>,
	breed: z.string().optional(),
	description: z.string().min(10, 'Description must be at least 10 characters'),
	imageUrl: z.url('Must be a valid URL'),
});

export type AnimalFormInput = z.input<typeof animalSchema>;
export type AnimalFormData = z.output<typeof animalSchema>;
