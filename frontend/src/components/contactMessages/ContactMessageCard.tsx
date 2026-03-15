import type { ContactMessage } from '../../types/contact.types';

interface Props {
	message: ContactMessage;
	onMarkAsRead: (id: string) => void;
	onOpen: () => void;
}

const ContactMessageCard = ({ message, onMarkAsRead, onOpen }: Props) => {
	return (
		<div className='border rounded-lg p-4 shadow-sm bg-white'>
			<div className='flex justify-between mb-2'>
				<h3 className='font-semibold'>{message.subject}</h3>

				<span
					className={`px-2 py-1 text-xs rounded ${
						message.status === 'unread'
							? 'bg-yellow-100 text-yellow-700'
							: 'bg-green-100 text-green-700'
					}`}
				>
					{message.status}
				</span>
			</div>

			<p className='text-sm'>
				<strong>{message.fullName}</strong>
			</p>

			<p className='text-sm text-gray-600'>{message.email}</p>

			<p
				onClick={onOpen}
				className='text-sm mt-2 text-blue-600 cursor-pointer line-clamp-2'
			>
				{message.message}
			</p>

			<button
				disabled={message.status === 'read'}
				onClick={() => onMarkAsRead(message._id)}
				className='mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-1 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
			>
				Mark as read
			</button>
		</div>
	);
};

export default ContactMessageCard;
