import { api } from './api';
import { type CreateAdoptionRequest } from '../types/adoption.types';

export const createAdoptionRequest = (
	animalId: string,
	data: CreateAdoptionRequest,
) => api.post(`/animals/${animalId}/adoption-requests`, data);

export const getAdoptionRequests = () => api.get('/adoption-requests');

export const updateAdoptionStatus = (id: string, status: string) =>
	api.patch(`/adoption-requests/${id}`, { status });
