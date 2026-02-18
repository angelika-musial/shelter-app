import express from 'express';
import {
	createContactMessage,
	getContactMessages,
	markContactAsRead,
} from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createContactMessage);
router.get('/', protect, getContactMessages);
router.patch('/:id', protect, markContactAsRead);

export default router;
