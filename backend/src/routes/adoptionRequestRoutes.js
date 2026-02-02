import express from 'express';
import { createAdoptionRequest } from '../controllers/adoptionRequestController.js';

const router = express.Router();

router.post('/animals/:id/adoption-requests', createAdoptionRequest);

export default router;
