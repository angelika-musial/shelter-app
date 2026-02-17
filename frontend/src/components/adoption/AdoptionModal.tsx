import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adoptionSchema, type AdoptionFormData } from './adoption.schema';
import { createAdoptionRequest } from '../../api/adoptionRequests.api';
import toast from 'react-hot-toast';

interface Props {
	animalId: string;
	onClose: () => void;
}

export const AdoptionModal = ({ animalId, onClose }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<AdoptionFormData>({
		resolver: zodResolver(adoptionSchema),
	});

	const onSubmit = async (data: AdoptionFormData) => {
		try {
			await createAdoptionRequest(animalId, data);
			toast.success('Adoption request sent!');
			onClose();
		} catch (error) {
			console.error(error);
			toast.error('Something went wrong.', {
				id: 'error-toast',
			});
		}
	};

	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
			<div className='bg-white p-6 rounded-lg w-full max-w-md'>
				<h2 className='text-xl font-semibold mb-4'>Adoption Form</h2>

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<div>
						<input
							{...register('fullName')}
							placeholder='Full Name'
							className='w-full border p-2 rounded'
						/>
						{errors.fullName && (
							<p className='text-red-500 text-sm'>{errors.fullName.message}</p>
						)}
					</div>

					<div>
						<input
							{...register('email')}
							placeholder='Email'
							className='w-full border p-2 rounded'
						/>
						{errors.email && (
							<p className='text-red-500 text-sm'>{errors.email.message}</p>
						)}
					</div>

					<div>
						<input
							{...register('phone')}
							placeholder='Phone'
							className='w-full border p-2 rounded'
						/>
						{errors.phone && (
							<p className='text-red-500 text-sm'>{errors.phone.message}</p>
						)}
					</div>

					<div>
						<textarea
							{...register('message')}
							placeholder='Please tell us why you are interested in adoption and add information about your living conditions.'
							className='w-full border p-2 rounded'
						/>
						{errors.message && (
							<p className='text-red-500 text-sm'>{errors.message.message}</p>
						)}
					</div>

					<div className='flex justify-end gap-3'>
						<button
							type='button'
							onClick={onClose}
							className='px-4 py-2 border rounded cursor-pointer hover:bg-gray-100'
						>
							Cancel
						</button>

						<button
							type='submit'
							disabled={isSubmitting}
							className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer'
						>
							{isSubmitting ? 'Sending...' : 'Send'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AdoptionModal;
