import axios from 'axios';

const API_URL = 'http://localhost:5000/api/animals';

export const getAnimals = () => axios.get(API_URL);
export const getAnimalById = (id: string) => axios.get(`${API_URL}/${id}`);
