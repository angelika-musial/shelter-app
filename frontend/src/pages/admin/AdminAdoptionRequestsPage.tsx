import { useEffect, useState } from 'react';
import {
	getAdoptionRequests,
	updateAdoptionStatus,
} from '../../api/adoptionRequests.api';
import type { AdoptionRequestPopulated } from '../../types/adoption.types';
import AdoptionRequestsTable from '../../components/adoptionRequests/AdoptionRequestsTable';
import AdoptionRequestCard from '../../components/adoptionRequests/AdoptionRequestCard';

const AdminAdoptionRequestsPage = () => {
	const [requests, setRequests] = useState<AdoptionRequestPopulated[]>([]);

	useEffect(() => {
		const fetchRequests = async () => {
			const res = await getAdoptionRequests();
			setRequests(res.data);
		};

		fetchRequests();
	}, []);

	const handleUpdate = async (id: string, status: 'approved' | 'rejected') => {
		await updateAdoptionStatus(id, status);

		setRequests((prev) =>
			prev.map((req) => (req._id === id ? { ...req, status } : req)),
		);
	};

	return (
		<div>
			<h2 className='text-2xl font-bold mb-6'>Adoption Requests</h2>

			<div className='md:hidden flex flex-col gap-4'>
				{requests.map((req) => (
					<AdoptionRequestCard
						key={req._id}
						request={req}
						onUpdate={handleUpdate}
					/>
				))}
			</div>

			<AdoptionRequestsTable requests={requests} onUpdate={handleUpdate} />
		</div>
	);
};

export default AdminAdoptionRequestsPage;
