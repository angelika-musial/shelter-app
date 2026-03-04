import { api } from './api';
import type { AnimalFormData } from '../schemas/animal.schema';

export const getAnimals = () => api.get('/animals');

export const getAnimalById = (id: string) => api.get(`/animals/${id}`);

export const deleteAnimal = (id: string) => api.delete(`/animals/${id}`);

export const createAnimal = (data: AnimalFormData) =>
	api.post('/animals', data);

export const updateAnimal = (id: string, data: AnimalFormData) =>
	api.patch(`/animals/${id}`, data);
