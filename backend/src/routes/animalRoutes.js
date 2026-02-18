import express from 'express';
import { createAnimal, getAnimals, getAnimalById, updateAnimal, deleteAnimal } from '../controllers/animalController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAnimals);
router.get('/:id', getAnimalById);
router.post('/', protect, createAnimal);
router.patch('/:id', protect, updateAnimal);
router.delete('/:id', protect, deleteAnimal);

export default router;
