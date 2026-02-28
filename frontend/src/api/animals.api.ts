import { api } from './api';

export const getAnimals = () => api.get('/animals');

export const getAnimalById = (id: string) => api.get(`/animals/${id}`);

export const deleteAnimal = (id: string) => api.delete(`/animals/${id}`);
