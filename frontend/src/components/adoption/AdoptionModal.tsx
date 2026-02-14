import { useState } from 'react';
import { createAdoptionRequest } from '../../api/adoptionRequests.api';
import toast from 'react-hot-toast';

interface Props {
	animalId: string;
	onClose: () => void;
}

export const AdoptionModal = ({ animalId, onClose }: Props) => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await createAdoptionRequest(animalId, formData);
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

				<form onSubmit={handleSubmit} className='space-y-4'>
					<input
						name='fullName'
						placeholder='Full Name'
						className='w-full border p-2 rounded'
						onChange={handleChange}
						required
					/>

					<input
						name='email'
						type='email'
						placeholder='Email'
						className='w-full border p-2 rounded'
						onChange={handleChange}
						required
					/>

					<input
						name='phone'
						placeholder='Phone'
						className='w-full border p-2 rounded'
						onChange={handleChange}
						required
					/>

					<textarea
						name='message'
						placeholder='Please tell us why you are interested in adoption and add information about your living conditions.'
						className='w-full border p-2 rounded'
						onChange={handleChange}
						required
					/>

					<div className='flex justify-end gap-3'>
						<button
							type='button'
							onClick={onClose}
							className='px-4 py-2 border rounded'
						>
							Cancel
						</button>

						<button
							type='submit'
							className='px-4 py-2 bg-blue-600 text-white rounded'
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AdoptionModal;
