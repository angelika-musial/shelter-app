import { api } from './api';
import { type ContactFormData } from '../schemas/contact.schema';

export const sendContactMessage = (data: ContactFormData) =>
  api.post('/contact', data);

