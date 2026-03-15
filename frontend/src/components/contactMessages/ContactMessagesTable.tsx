import type { ContactMessage } from '../../types/contact.types';

interface Props {
	messages: ContactMessage[];
	onMarkAsRead: (id: string) => void;
	onOpen: (msg: ContactMessage) => void;
}

const ContactMessagesTable = ({ messages, onMarkAsRead, onOpen }: Props) => {
	return (
		<div className='hidden md:block overflow-x-auto border rounded-lg'>
			<table className='w-full'>
				<thead className='bg-gray-200 text-left text-sm uppercase text-gray-600'>
					<tr>
						<th className='p-3'>Name</th>
						<th className='p-3'>Email</th>
						<th className='p-3'>Subject</th>
						<th className='p-3'>Message</th>
						<th className='p-3'>Date</th>
						<th className='p-3'>Status</th>
						<th className='p-3'>Action</th>
					</tr>
				</thead>

				<tbody>
					{messages.map((msg) => (
						<tr
							key={msg._id}
							className={`border-t hover:bg-gray-100 ${
								msg.status === 'unread' ? 'bg-blue-50 font-semibold' : ''
							}`}
						>
							<td className='p-3'>{msg.fullName}</td>

							<td className='p-3 text-sm text-gray-600'>{msg.email}</td>

							<td className='p-3'>{msg.subject}</td>

							<td
								onClick={() => onOpen(msg)}
								className='p-3 max-w-xs cursor-pointer text-blue-700 truncate'
							>
								{msg.message}
							</td>

							<td className='p-3 text-sm'>
								{msg.createdAt
									? new Date(msg.createdAt).toLocaleDateString()
									: 'N/A'}
							</td>

							<td className='p-3'>
								<span
									className={`px-2 py-1 text-xs rounded ${
										msg.status === 'unread'
											? 'bg-yellow-100 text-yellow-700'
											: 'bg-green-100 text-green-700'
									}`}
								>
									{msg.status}
								</span>
							</td>

							<td className='p-3'>
								<button
									disabled={msg.status === 'read'}
									onClick={() => onMarkAsRead(msg._id)}
									className='bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
								>
									Mark as read
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ContactMessagesTable;
