import AnimalCard from './AnimalCard';
import type { Animal } from '../../types/animal.types';

interface AnimalsProps {
	animals: Animal[];
	isAdmin?: boolean;
	onDelete?: (id: string) => void;
	onEdit?: (id: string) => void;
}

const AnimalList = ({ animals, isAdmin, onDelete, onEdit }: AnimalsProps) => {
	return (
		<div className='grid md:grid-cols-3 gap-6'>
			{animals.map((animal) => (
				<AnimalCard
					key={animal._id}
					animal={animal}
					isAdmin={isAdmin}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			))}
		</div>
	);
};

export default AnimalList;
