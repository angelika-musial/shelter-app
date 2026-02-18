import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

export const loginAdmin = async (req, res) => {
	const { email, password } = req.body;

	const admin = await Admin.findOne({ email });

	if (!admin || !(await admin.comparePassword(password))) {
		return res.status(401).json({ message: 'Invalid credentials' });
	}

	const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});

	res.json({
		token,
	});
};
