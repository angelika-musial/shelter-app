import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/animalRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('API is running');
});

app.use('/api/animals', animalRoutes);

export default app;
