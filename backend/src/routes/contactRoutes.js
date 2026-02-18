import express from 'express';
import {
	createContactMessage,
	getContactMessages,
	markContactAsRead,
} from '../controllers/contactController.js';

const router = express.Router();

router.post('/', createContactMessage);
router.get('/', getContactMessages);
router.patch('/:id', markContactAsRead);

export default router;
