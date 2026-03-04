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
		navigate(`/admin/animals/${id}/edit`);
	};

	const handleCreate = () => {
		navigate('/admin/animals/new');
	};

	return (
		<>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl font-bold'>Animals</h2>

				<button
					onClick={handleCreate}
					className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer'
				>
					Create New Animal
				</button>
			</div>
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
