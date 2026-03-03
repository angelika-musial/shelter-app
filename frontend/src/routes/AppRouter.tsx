import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import AnimalsPage from '../pages/AnimalsPage';
import AnimalDetailsPage from '../pages/AnimalDetailsPage';
import ContactPage from '../pages/ContactPage';
import AdminLoginPage from '../pages/AdminLoginPage';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import { ProtectedRoute } from '../components/admin/ProtectedRoute';
import AdminLayout from '../components/admin/AdminLayout';
import AdminAnimalsPage from '../pages/admin/AdminAnimalsPage';
import AdminAdoptionRequestsPage from '../pages/admin/AdminAdoptionRequestsPage';
import AdminContactMessagesPage from '../pages/admin/AdminContactMessagesPage';
import CreateAnimalPage from '../pages/admin/CreateAnimalPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'animals', element: <AnimalsPage /> },
			{ path: 'animals/:id', element: <AnimalDetailsPage /> },
			{ path: 'contact', element: <ContactPage /> },
		],
	},
	{ path: 'admin/login', element: <AdminLoginPage /> },
	{
		path: 'admin',
		element: (
			<ProtectedRoute>
				<AdminLayout />
			</ProtectedRoute>
		),
		children: [
			{ index: true, element: <Navigate to='dashboard' replace /> },
			{ path: 'dashboard', element: <AdminDashboardPage /> },
			{ path: 'animals', element: <AdminAnimalsPage /> },
			{ path: 'animals/new', element: <CreateAnimalPage /> },
			{ path: 'adoption-requests', element: <AdminAdoptionRequestsPage /> },
			{ path: 'contact-messages', element: <AdminContactMessagesPage /> },
		],
	},
]);
