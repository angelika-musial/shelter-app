import type { Animal } from '../../types/animal.types';
import { Link } from 'react-router-dom';

interface AnimalProps {
	animal: Animal;
}

const AnimalCard = ({ animal }: AnimalProps) => {
	return (
		<div className='bg-white shadow rounded-xl p-4'>
			<img
				src={animal.imageUrl}
				alt={animal.name}
				className='h-95 w-full object-cover rounded-md'
			/>

			<h2 className='text-xl font-semibold mt-4'>{animal.name}</h2>
			<p className='text-gray-600'>Species: {animal.species}</p>
			<p className='text-gray-600'>Breed: {animal.breed}</p>
			<p className='text-gray-600'>Age: {animal.age} years old</p>

			<Link
				to={`/animals/${animal._id}`}
				className='inline-block mt-4 text-blue-600 hover:underline'
			>
				View Details
			</Link>
		</div>
	);
};

export default AnimalCard;
