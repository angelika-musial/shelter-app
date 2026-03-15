import { api } from './api';
import { type ContactFormData } from '../schemas/contact.schema';

export const sendContactMessage = (data: ContactFormData) =>
	api.post('/contact', data);

export const getContactMessages = () => api.get('/contact');

export const markContactMessageAsRead = (id: string) =>
	api.patch(`/contact/${id}`);
