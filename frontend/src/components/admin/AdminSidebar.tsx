import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminSidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('adminToken');
		toast.success('Logged out successfully!');
		navigate('/admin/login');
	};

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className='md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded cursor-pointer'
			>
				<Menu size={24} />
			</button>

			{isOpen && (
				<div
					className='fixed inset-0 bg-black/40 z-40 md:hidden'
					onClick={() => setIsOpen(false)}
				/>
			)}

			<aside
				className={`
				fixed md:static top-0 left-0 min-h-screen z-50
				w-55 min-w-48 bg-gray-900 text-white p-6
				transform transition-transform duration-300
				${isOpen ? 'translate-x-0' : '-translate-x-full'}
				md:translate-x-0
			`}
			>
				<h2 className='text-xl font-bold mb-8'>Admin Panel</h2>

				<nav className='flex flex-col gap-4'>
					<Link to='/admin/dashboard' onClick={() => setIsOpen(false)}>
						Dashboard
					</Link>

					<Link to='/admin/animals' onClick={() => setIsOpen(false)}>
						Animals
					</Link>

					<Link to='/admin/adoption-requests' onClick={() => setIsOpen(false)}>
						Adoption Requests
					</Link>

					<Link to='/admin/contact-messages' onClick={() => setIsOpen(false)}>
						Contact Messages
					</Link>
				</nav>

				<button
					className='mt-10 cursor-pointer text-lg text-red-500 hover:text-red-400'
					onClick={logout}
				>
					Logout
				</button>
			</aside>
		</>
	);
};

export default AdminSidebar;
