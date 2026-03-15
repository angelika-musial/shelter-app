export interface ContactMessage {
	_id: string;
	fullName: string;
	email: string;
	subject: string;
	message: string;
	status: 'unread' | 'read';
	createdAt?: string;
}
