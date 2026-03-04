import { useNavigate, useParams } from 'react-router-dom';
import { getAnimalById, updateAnimal } from '../../api/animals.api';
import AnimalForm from '../../components/animals/AnimalForm';
import type { AnimalFormData } from '../../schemas/animal.schema';
import { useEffect, useState } from 'react';
import type { Animal } from '../../types/animal.types';

const EditAnimalPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [animal, setAnimal] = useState<Animal | null>(null);

	useEffect(() => {
		if (!id) return;

		const fetchAnimal = async () => {
			const response = await getAnimalById(id);
			setAnimal(response.data);
		};

		fetchAnimal();
	}, [id]);

	const handleUpdate = async (data: AnimalFormData) => {
		if (!id) return;
		await updateAnimal(id, data);
		navigate('/admin/animals');
	};

	const defaultValues = animal
		? {
				name: animal.name,
				age: String(animal.age),
				species: animal.species,
				breed: animal.breed ?? '',
				description: animal.description,
				imageUrl: animal.imageUrl,
			}
		: undefined;

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>Edit Animal Data</h2>
			{animal && (
				<AnimalForm onSubmit={handleUpdate} defaultValues={defaultValues} />
			)}
		</div>
	);
};

export default EditAnimalPage;
