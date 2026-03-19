import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
	return (
		<div className='flex min-h-screen'>
			<AdminSidebar />
			<main className='flex-1 bg-gray-50 pt-18 p-6 md:p-6'>
				<Outlet />
			</main>
		</div>
	);
};

export default AdminLayout;
