import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className='text-center py-20'>
			<h1 className='text-5xl font-bold mb-6'>
				Welcome to Our Animal Shelter
			</h1>
			<p className="text-xl text-gray-600 mb-8">Give a loving home to a pet in need.</p>
			<Link to='/animals' className="bg-blue-500 hover:bg-blue-600 text-xl text-white px-6 py-3 rounded-lg">View Available Animals</Link>
		</div>
	);
};

export default HomePage;
