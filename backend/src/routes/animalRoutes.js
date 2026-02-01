import express from 'express';
import { createAnimal, getAnimals } from '../controllers/animalController.js';

const router = express.Router();

router.get('/', getAnimals);
router.post('/', createAnimal);

export default router;
