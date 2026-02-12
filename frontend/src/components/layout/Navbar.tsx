import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='bg-white shadow-md'>
			<div className='container mx-auto p-4 flex justify-between items-center'>
				<Link to='/' className='text-2xl font-bold'>
					Home4Paws
				</Link>

				<div className='space-x-6 text-xl'>
					<Link to='/animals' className='hover:text-blue-600'>
						Animals
					</Link>

					<Link to='/contact' className='hover:text-blue-600'>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
