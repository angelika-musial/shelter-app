import { useNavigate } from 'react-router-dom';
import AnimalForm from '../../components/animals/AnimalForm';
import { createAnimal } from '../../api/animals.api';
import type { AnimalFormData } from '../../schemas/animal.schema';

const CreateAnimalPage = () => {
	const navigate = useNavigate();

	const handleCreate = async (data: AnimalFormData) => {
		await createAnimal(data);
		navigate('/admin/animals');
	};

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>Create Animal</h2>
			<AnimalForm onSubmit={handleCreate} />
		</div>
	);
};

export default CreateAnimalPage;
