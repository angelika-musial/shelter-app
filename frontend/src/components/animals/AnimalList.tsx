import AnimalCard from './AnimalCard';
import type { Animal } from '../../types/animal.types';

interface AnimalsProps {
	animals: Animal[];
}

const AnimalList = ({ animals }: AnimalsProps) => {
	return (
		<div className='grid md:grid-cols-3 gap-6'>
			{animals.map((animal) => (
				<AnimalCard key={animal._id} animal={animal} />
			))}
		</div>
	);
};

export default AnimalList;
