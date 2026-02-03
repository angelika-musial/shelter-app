import express from 'express';
import {
	createAdoptionRequest,
	getAdoptionRequests,
} from '../controllers/adoptionRequestController.js';

const router = express.Router();

router.post('/animals/:id/adoption-requests', createAdoptionRequest);
router.get('/adoption-requests', getAdoptionRequests);

export default router;
