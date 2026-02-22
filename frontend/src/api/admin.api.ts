import { api } from './api';

export const loginAdmin = async (email: string, password: string) => {
	const response = await api.post('/admin/login', { email, password });
	return response.data;
};

export const getAdoptionRequests = () => api.get('/adoption-requests');

export const updateAdoptionStatus = (id: string, status: string) =>
	api.patch(`/adoption-requests/${id}`, { status });
