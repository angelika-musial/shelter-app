import type { AdoptionRequestPopulated } from '../../types/adoption.types';

interface Props {
	requests: AdoptionRequestPopulated[];
	onUpdate: (id: string, status: 'approved' | 'rejected') => void;
}

const AdoptionRequestsTable = ({ requests, onUpdate }: Props) => {
	return (
		<div className='hidden md:block overflow-x-auto rounded-lg border border-gray-200'>
			<table className='w-full text-sm'>
				<thead className='bg-gray-300 text-left text-sm uppercase text-gray-600'>
					<tr>
						<th className='p-3'>Animal</th>
						<th className='p-3'>Name</th>
						<th className='p-3'>Email</th>
						<th className='p-3'>Phone</th>
						<th className='p-3'>Message</th>
						<th className='p-3'>Status</th>
						<th className='p-3'>Action</th>
					</tr>
				</thead>

				<tbody>
					{requests.map((req) => (
						<tr
							key={req._id}
							className='border-t odd:bg-gray-100 even:bg-gray-200'
						>
							<td className='p-3'>{req.animal?.name ?? 'Unknown'}</td>

							<td className='p-3'>{req.fullName}</td>

							<td className='p-3 text-gray-800'>{req.email}</td>

							<td className='p-3'>{req.phone}</td>

							<td className='p-3 max-w-xs'>{req.message}</td>

							<td className='p-3'>
								<span
									className={`px-2 py-1 rounded text-xs font-medium ${
										req.status === 'approved'
											? 'bg-green-100 text-green-700'
											: req.status === 'rejected'
												? 'bg-red-100 text-red-700'
												: 'bg-yellow-100 text-yellow-700'
									}`}
								>
									{req.status}
								</span>
							</td>

							<td className='p-3'>
								<div className='flex justify-center gap-2'>
									<button
										disabled={req.status !== 'pending'}
										onClick={() => onUpdate(req._id, 'approved')}
										className='bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
									>
										Approve
									</button>

									<button
										disabled={req.status !== 'pending'}
										onClick={() => onUpdate(req._id, 'rejected')}
										className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
									>
										Reject
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AdoptionRequestsTable;
