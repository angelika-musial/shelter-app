import { Navigate } from 'react-router-dom';
import type { JSX } from 'react';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const token = localStorage.getItem('adminToken');

	if (!token) {
		return <Navigate to='/admin/login' replace />;
	}

	return children;
};
