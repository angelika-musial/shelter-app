import { api } from './api';
import { type CreateAdoptionRequest } from '../types/adoption.types';

export const createAdoptionRequest = (
	animalId: string,
	data: CreateAdoptionRequest,
) => api.post(`/animals/${animalId}/adoption-requests`, data);
