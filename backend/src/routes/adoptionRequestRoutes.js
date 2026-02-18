import express from 'express';
import {
	createAdoptionRequest,
	getAdoptionRequests,
	updateAdoptionRequestStatus,
} from '../controllers/adoptionRequestController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/animals/:id/adoption-requests', createAdoptionRequest);
router.get('/adoption-requests', protect, getAdoptionRequests);
router.patch('/adoption-requests/:id', protect, updateAdoptionRequestStatus);

export default router;
