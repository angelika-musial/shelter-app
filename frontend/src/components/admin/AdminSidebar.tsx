import { Link } from 'react-router-dom';

const AdminSidebar = () => {
	return (
		<aside className='w-64 bg-gray-900 text-white p-6'>
			<h2 className='text-xl font-bold mb-8'>Admin Panel</h2>

			<nav className='flex flex-col gap-4'>
				<Link to='/admin/dashboard'>Dashboard</Link>
				<Link to='/admin/animals'>Animals</Link>
				<Link to='/admin/adoption-requests'>Adoption Requests</Link>
				<Link to='/admin/contact-messages'>Contact Messages</Link>
			</nav>

			<button
				className='mt-10 cursor-pointer text-lg text-red-500 hover:text-red-400'
				onClick={() => {
					localStorage.removeItem('adminToken');
					window.location.href = '/admin/login';
				}}
			>
				Logout
			</button>
		</aside>
	);
};

export default AdminSidebar;
