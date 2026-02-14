export interface AdoptionRequest {
	_id: string;
	animal: string;
	fullName: string;
	email: string;
	phone: string;
	message: string;
	status: 'pending' | 'approved' | 'rejected';
	createdAt?: string;
	updatedAt?: string;
}

export interface CreateAdoptionRequest {
	fullName: string;
	email: string;
	phone: string;
	message: string;
}
