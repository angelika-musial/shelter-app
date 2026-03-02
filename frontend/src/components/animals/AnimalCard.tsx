import type { Animal } from '../../types/animal.types';
import { Link } from 'react-router-dom';

interface AnimalProps {
	animal: Animal;
	isAdmin?: boolean;
	onDelete?: (id: string) => void;
	onEdit?: (id: string) => void;
}

const AnimalCard = ({ animal, isAdmin, onDelete, onEdit }: AnimalProps) => {
	return (
		<div className='bg-white shadow rounded-xl p-4'>
			<img
				src={animal.imageUrl}
				alt={animal.name}
				className='h-96 w-full object-cover rounded-md'
			/>

			<h2 className='text-xl font-semibold mt-4'>{animal.name}</h2>
			<p className='text-gray-600'>Species: {animal.species}</p>
			<p className='text-gray-600'>Breed: {animal.breed}</p>
			<p className='text-gray-600'>Age: {animal.age} years old</p>

			<div className='mt-4'>
				{isAdmin ? (
					<div className='flex justify-end gap-2'>
						<button
							className='bg-blue-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-600'
							onClick={() => onEdit?.(animal._id)}
						>
							Edit
						</button>

						<button
							className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600'
							onClick={() => onDelete?.(animal._id)}
						>
							Delete
						</button>
					</div>
				) : (
					<Link
						to={`/animals/${animal._id}`}
						className='inline-block text-blue-600 hover:underline'
					>
						View Details
					</Link>
				)}
			</div>
		</div>
	);
};

export default AnimalCard;
