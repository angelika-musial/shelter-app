import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimalList from '../../components/animals/AnimalList';
import type { Animal } from '../../types/animal.types';
import { getAnimals, deleteAnimal } from '../../api/animals.api';

const AdminAnimalsPage = () => {
	const navigate = useNavigate();
	const [animals, setAnimals] = useState<Animal[]>([]);

	useEffect(() => {
		const fetchAnimals = async () => {
			const response = await getAnimals();
			setAnimals(response.data);
		};

		fetchAnimals();
	}, []);

	const handleDelete = async (id: string) => {
		await deleteAnimal(id);
		setAnimals((prev) => prev.filter((animal) => animal._id !== id));
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
		</>
	);
};

export default AdminAnimalsPage;
