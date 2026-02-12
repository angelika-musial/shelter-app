import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';

const Layout = () => {
	return (
		<div>
			<Navbar />
			<main className='container mx-auto p-6'>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
