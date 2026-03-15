import { useEffect, useState } from 'react';
import type { ContactMessage } from '../../types/contact.types';
import {
	getContactMessages,
	markContactMessageAsRead,
} from '../../api/contact.api';
import ContactMessageCard from '../../components/contactMessages/ContactMessageCard';
import ContactMessagesTable from '../../components/contactMessages/contactMessagesTable';
import MessageModal from '../../components/modal/MessageModal';

const AdminContactMessagesPage = () => {
	const [messages, setMessages] = useState<ContactMessage[]>([]);
	const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
		null,
	);

	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const res = await getContactMessages();
				setMessages(res.data);
			} catch (error) {
				console.error('Failed to fetch contact messages:', error);
			}
		};
		fetchMessages();
	}, []);

	const handleMarkAsRead = async (id: string) => {
		await markContactMessageAsRead(id);
		setMessages((prev) =>
			prev.map((msg) => (msg._id === id ? { ...msg, status: 'read' } : msg)),
		);
	};

	const unreadCount = messages.filter((msg) => msg.status === 'unread').length;

	const sortedMessages = [...messages].sort((a, b) => {
		if (a.status === 'unread' && b.status === 'read') return -1;
		if (a.status === 'read' && b.status === 'unread') return 1;
		return 0;
	});

	return (
		<div>
			<h2 className='text-2xl font-bold mb-6'>
				Contact Messages ({unreadCount} unread)
			</h2>
			<div className='md:hidden flex flex-col gap-4'>
				{sortedMessages.map((msg) => (
					<ContactMessageCard
						key={msg._id}
						message={msg}
						onMarkAsRead={handleMarkAsRead}
						onOpen={() => setSelectedMessage(msg)}
					/>
				))}
			</div>
			<ContactMessagesTable
				messages={sortedMessages}
				onMarkAsRead={handleMarkAsRead}
				onOpen={setSelectedMessage}
			/>
			{selectedMessage && (
				<MessageModal
					message={selectedMessage}
					onClose={() => setSelectedMessage(null)}
				/>
			)}
		</div>
	);
};

export default AdminContactMessagesPage;
