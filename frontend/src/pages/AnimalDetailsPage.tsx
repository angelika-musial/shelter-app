import type { Animal } from '../types/animal.types';
import { useEffect, useState } from 'react';
import { getAnimalById } from '../api/animals.api';
import { useParams } from 'react-router-dom';

const AnimalDetailsPage = () => {
	const { id } = useParams();
	const [animal, setAnimal] = useState<Animal | null>(null);

	useEffect(() => {
		const fetchAnimal = async () => {
			if (id) {
				const response = await getAnimalById(id);
				setAnimal(response.data);
			}
		};
		fetchAnimal();
	}, [id]);

	if (!animal) return <p>Loading...</p>;

	return (
		<div className='max-w-4xl mx-auto p-6'>
			<img
				src={animal.imageUrl}
				alt={animal.name}
				className='h-96 w-fit object-cover rounded-md'
			/>

			<h1 className='text-3xl font-bold mt-6'>{animal.name}</h1>

			<p className='mt-2 text-gray-600'>
				{animal.species} • {animal.breed} • {animal.age} years old
			</p>

			<p className='mt-4'>{animal.description}</p>
		</div>
	);
};

export default AnimalDetailsPage;
