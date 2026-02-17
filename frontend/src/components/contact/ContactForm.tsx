import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	contactSchema,
	type ContactFormData,
} from '../../schemas/contact.schema';
import { sendContactMessage } from '../../api/contact.api';
import toast from 'react-hot-toast';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			await sendContactMessage(data);
			toast.success('Message sent successfully!');
			reset();
		} catch (error) {
			console.error(error);
			toast.error('Something went wrong. Please try again later.', {
				id: 'error-toast',
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
			<div>
				<input
					{...register('fullName')}
					placeholder='Full name'
					className='w-full border p-3 rounded'
				/>
				{errors.fullName && (
					<p className='text-red-500 text-sm'>{errors.fullName.message}</p>
				)}
			</div>
			<div>
				<input
					{...register('email')}
					placeholder='Email'
					className='w-full border p-3 rounded'
				/>
				{errors.email && (
					<p className='text-red-500 text-sm'>{errors.email.message}</p>
				)}
			</div>
			<div>
				<input
					{...register('subject')}
					placeholder='Subject'
					className='w-full border p-3 rounded'
				/>
				{errors.subject && (
					<p className='text-red-500 text-sm'>{errors.subject.message}</p>
				)}
			</div>
			<div>
				<textarea
					{...register('message')}
					placeholder='Your message'
					rows={5}
					className='w-full border p-3 rounded'
				/>
				{errors.message && (
					<p className='text-red-500 text-sm'>{errors.message.message}</p>
				)}
			</div>
			<button
				type='submit'
				disabled={isSubmitting}
				className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 cursor-pointer'
			>
				{isSubmitting ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	);
};

export default ContactForm;
