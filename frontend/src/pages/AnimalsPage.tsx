import AnimalList from '../components/animals/AnimalList';

const AnimalsPage = () => {
	return (
		<div className='text-center'>
			<h1 className='text-3xl font-bold mb-6'>
				Animals available for adoption
			</h1>
			<AnimalList />
		</div>
	);
};

export default AnimalsPage;
