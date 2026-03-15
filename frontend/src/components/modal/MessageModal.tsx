import type { ContactMessage } from '../../types/contact.types';

interface Props {
	message: ContactMessage;
	onClose: () => void;
}

const MessageModal = ({ message, onClose }: Props) => {
	return (
		<div className='fixed inset-0 bg-black/40 flex items-center justify-center p-4'>
			<div className='bg-white rounded-lg p-6 max-w-lg w-full'>
				<h3 className='text-xl font-bold mb-2'>{message.subject}</h3>

				<p className='text-sm text-gray-600 mb-2'>
					{message.fullName} • {message.email}
				</p>

				<p className='text-gray-700 whitespace-pre-line'>{message.message}</p>

				<button
					onClick={onClose}
					className='mt-4 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700'
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default MessageModal;
