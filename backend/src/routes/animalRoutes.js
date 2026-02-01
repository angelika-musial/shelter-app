import express from 'express';
import { createAnimal, getAnimals, getAnimalById, updateAnimal, deleteAnimal } from '../controllers/animalController.js';

const router = express.Router();

router.get('/', getAnimals);
router.get('/:id', getAnimalById);
router.post('/', createAnimal);
router.patch('/:id', updateAnimal);
router.delete('/:id', deleteAnimal);

export default router;
