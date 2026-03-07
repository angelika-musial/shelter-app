import type { AdoptionRequestPopulated } from '../../types/adoption.types';

interface Props {
	request: AdoptionRequestPopulated;
	onUpdate: (id: string, status: 'approved' | 'rejected') => void;
}

const AdoptionRequestCard = ({ request, onUpdate }: Props) => {
	return (
		<div className='border rounded-lg p-4 shadow-sm bg-white'>
			<div className='flex justify-between mb-2'>
				<h3 className='font-semibold'>{request.animal?.name ?? 'Unknown'}</h3>

				<span
					className={`px-2 py-1 rounded text-xs font-medium ${
						request.status === 'approved'
							? 'bg-green-100 text-green-700'
							: request.status === 'rejected'
								? 'bg-red-100 text-red-700'
								: 'bg-yellow-100 text-yellow-700'
					}`}
				>
					{request.status}
				</span>
			</div>

			<p className='text-sm'>
				<strong>Name:</strong> {request.fullName}
			</p>

			<p className='text-sm'>
				<strong>Email:</strong> {request.email}
			</p>

			<p className='text-sm'>
				<strong>Phone:</strong> {request.phone}
			</p>

			<p className='text-sm mt-2 text-gray-600'>{request.message}</p>

			<div className='flex gap-2 mt-3'>
				<button
					disabled={request.status !== 'pending'}
					onClick={() => onUpdate(request._id, 'approved')}
					className='flex-1 bg-green-500 hover:bg-green-600 text-white py-1 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
				>
					Approve
				</button>

				<button
					disabled={request.status !== 'pending'}
					onClick={() => onUpdate(request._id, 'rejected')}
					className='flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
				>
					Reject
				</button>
			</div>
		</div>
	);
};

export default AdoptionRequestCard;
