import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import AnimalsPage from '../pages/AnimalsPage';
import AnimalDetailsPage from '../pages/AnimalDetailsPage';
import ContactPage from '../pages/ContactPage';

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
]);
