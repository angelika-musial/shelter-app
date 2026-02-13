import { useEffect, useState } from 'react';
import AnimalList from '../components/animals/AnimalList';
import type { Animal } from '../types/animal.types';
import { getAnimals } from '../api/animals.api';

const AnimalsPage = () => {
	const [animals, setAnimals] = useState<Animal[]>([]);

	useEffect(() => {
		const fetchAnimals = async () => {
			const response = await getAnimals();
			setAnimals(response.data);
		};

		fetchAnimals();
	}, []);

	return (
		<div className='text-center'>
			<h1 className='text-3xl font-bold mb-6'>
				Animals available for adoption
			</h1>
			<AnimalList animals={animals} />
		</div>
	);
};

export default AnimalsPage;
