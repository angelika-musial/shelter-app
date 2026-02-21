import { api } from './api';

export const getAnimals = () => api.get('/animals');

export const getAnimalById = (id: string) => api.get(`/animals/${id}`);
