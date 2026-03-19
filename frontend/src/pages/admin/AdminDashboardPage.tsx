import { useEffect, useState } from 'react';
import { getAnimals } from '../../api/animals.api';
import { getAdoptionRequests } from '../../api/adoptionRequests.api';
import { getContactMessages } from '../../api/contact.api';

const AdminDashboardPage = () => {
	const [animalsCount, setAnimalsCount] = useState(0);
	const [pendingRequests, setPendingRequests] = useState(0);
	const [unreadMessages, setUnreadMessages] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const [animals, requests, messages] = await Promise.all([
				getAnimals(),
				getAdoptionRequests(),
				getContactMessages(),
			]);

			setAnimalsCount(animals.data.length);

			setPendingRequests(
				requests.data.filter((request: { status: string }) => request.status === 'pending').length,
			);

			setUnreadMessages(
				messages.data.filter((message: { status: string }) => message.status === 'unread').length,
			);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1 className='text-2xl font-bold mb-6'>Dashboard</h1>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				<div className='bg-white shadow rounded-lg p-6'>
					<p className='text-gray-700 text-lg'>Animals Number</p>
					<h2 className='text-3xl font-bold'>{animalsCount}</h2>
				</div>

				<div className='bg-white shadow rounded-lg p-6'>
					<p className='text-gray-700 text-lg'>Pending Adoption Requests</p>
					<h2 className='text-3xl font-bold text-yellow-600'>
						{pendingRequests}
					</h2>
				</div>

				<div className='bg-white shadow rounded-lg p-6'>
					<p className='text-gray-700 text-lg'>Unread Messages</p>
					<h2 className='text-3xl font-bold text-red-600'>{unreadMessages}</h2>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboardPage;
