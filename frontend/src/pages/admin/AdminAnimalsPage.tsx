import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimalList from '../../components/animals/AnimalList';
import type { Animal } from '../../types/animal.types';
import { getAnimals, deleteAnimal } from '../../api/animals.api';
import ConfirmModal from '../../components/modal/ConfirmModal';

const AdminAnimalsPage = () => {
	const navigate = useNavigate();
	const [animals, setAnimals] = useState<Animal[]>([]);
	const [animalToDelete, setAnimalToDelete] = useState<Animal | null>(null);

	useEffect(() => {
		const fetchAnimals = async () => {
			const response = await getAnimals();
			setAnimals(response.data);
		};

		fetchAnimals();
	}, []);

	const handleDelete = async (id: string) => {
		const animal = animals.find((a) => a._id === id);
		if (animal) {
			setAnimalToDelete(animal);
		}
	};

	const confirmDelete = async () => {
		if (!animalToDelete) return;
		await deleteAnimal(animalToDelete._id);
		setAnimals((prev) => prev.filter((a) => a._id !== animalToDelete._id));
		setAnimalToDelete(null);
	};

	const handleEdit = (id: string) => {
		navigate(`/admin/animals/edit/${id}`);
	};

	return (
		<>
			<h2 className='text-2xl text-center font-bold mb-6'>Animals</h2>
			<AnimalList
				animals={animals}
				isAdmin
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
			{animalToDelete && (
				<ConfirmModal
					title='Delete animal'
					description={`Are you sure you want to delete ${animalToDelete.name}?`}
					onCancel={() => setAnimalToDelete(null)}
					onConfirm={confirmDelete}
				/>
			)}
		</>
	);
};

export default AdminAnimalsPage;
