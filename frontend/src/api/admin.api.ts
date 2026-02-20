export const loginAdmin = async (email: string, password: string) => {
	try {
		const response = await fetch('http://localhost:5000/api/admin/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});
		if (!response.ok) {
			throw new Error('Invalid credentials. Please try again.');
		}

		return response.json();
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const getAdoptionRequests = async () => {
	const token = localStorage.getItem('adminToken');

	const response = await fetch('http://localhost:5000/api/adoption-requests', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch adoption requests');
	}

	return response.json();
};

export const updateAdoptionStatus = async (id: string, status: string) => {
	const token = localStorage.getItem('adminToken');

	const response = await fetch(
		`http://localhost:5000/api/adoption-requests/${id}`,
		{
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ status }),
		},
	);

	if (!response.ok) {
		throw new Error('Failed to update status');
	}

	return response.json();
};
