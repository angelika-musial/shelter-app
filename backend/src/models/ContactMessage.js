import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			trim: true,
			lowercase: true,
			match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
		},
		subject: {
			type: String,
			required: true,
			minlength: 2,
		},
		message: {
			type: String,
			required: true,
			minlength: 10,
		},
		status: {
			type: String,
			enum: ['unread', 'read'],
			default: 'unread',
		},
	},
	{ timestamps: true },
);

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

export default ContactMessage;
