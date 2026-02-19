import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/animalRoutes.js';
import adoptionRequestRoutes from './routes/adoptionRequestRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('API is running');
});

app.use('/api/animals', animalRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', adoptionRequestRoutes);
app.use('/api/admin', adminRoutes);

export default app;
