import { api } from './api';

export const loginAdmin = (email: string, password: string) =>
	api.post('/admin/login', { email, password });

export const getAdoptionRequests = () => api.get('/adoption-requests');

export const updateAdoptionStatus = (id: string, status: string) =>
	api.patch(`/adoption-requests/${id}`, { status });
