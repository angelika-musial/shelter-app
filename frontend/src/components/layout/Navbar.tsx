import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='bg-white shadow-md'>
			<div className='container mx-auto p-4 flex justify-between items-center'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive
							? 'text-2xl font-semibold text-blue-600'
							: 'text-2xl font-semibold text-gray-700 hover:text-blue-600'
					}
				>
					Home4Paws
				</NavLink>

				<div className='space-x-6 text-xl font-semibold'>
					<NavLink
						to='/animals'
						className={({ isActive }) =>
							isActive
								? 'text-blue-600 border-b-2 border-blue-600'
								: 'text-gray-700 hover:text-blue-600'
						}
					>
						Animals
					</NavLink>

					<NavLink
						to='/contact'
						className={({ isActive }) =>
							isActive
								? 'text-blue-600 border-b-2 border-blue-600'
								: 'text-gray-700 hover:text-blue-600'
						}
					>
						Contact
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
