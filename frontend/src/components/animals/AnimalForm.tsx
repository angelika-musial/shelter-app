import { useForm } from 'react-hook-form';
import {
	animalSchema,
	type AnimalFormInput,
	type AnimalFormData,
} from '../../schemas/animal.schema';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
	onSubmit: (data: AnimalFormData) => void;
	defaultValues?: Partial<AnimalFormInput>;
}

const AnimalForm = ({ onSubmit, defaultValues }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AnimalFormInput, unknown, AnimalFormData>({
		resolver: zodResolver(animalSchema),
		defaultValues,
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='space-y-4 max-w-md'
			noValidate
		>
			<div>
				<input
					{...register('name')}
					placeholder='Name'
					className='w-full border p-2 rounded'
				/>
				{errors.name && (
					<p className='text-red-500 text-sm'>{errors.name.message}</p>
				)}
			</div>

			<div>
				<input
					type='number'
					step='0.1'
					{...register('age')}
					placeholder='Age (in years)'
					className='w-full border p-2 rounded'
				/>
				{errors.age && (
					<p className='text-red-500 text-sm'>{errors.age.message}</p>
				)}
			</div>

			<div>
				<select {...register('species')} className='w-full border p-2 rounded'>
					<option value=''>Select species</option>
					<option value='dog'>Dog</option>
					<option value='cat'>Cat</option>
					<option value='other'>Other</option>
				</select>
				{errors.species && (
					<p className='text-red-500 text-sm'>{errors.species.message}</p>
				)}
			</div>

			<div>
				<input
					{...register('breed')}
					placeholder='Breed*'
					className='w-full border p-2 rounded'
				/>
			</div>

			<div>
				<textarea
					{...register('description')}
					placeholder='Description'
					className='w-full border p-2 rounded'
				/>
				{errors.description && (
					<p className='text-red-500 text-sm'>{errors.description.message}</p>
				)}
			</div>

			<div>
				<input
					{...register('imageUrl')}
					placeholder='Image URL'
					className='w-full border p-2 rounded'
				/>
				{errors.imageUrl && (
					<p className='text-red-500 text-sm'>{errors.imageUrl.message}</p>
				)}
			</div>

			<button
				type='submit'
				className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer'
			>
				Save
			</button>
		</form>
	);
};

export default AnimalForm;
