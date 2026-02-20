import { useForm } from 'react-hook-form';
import { loginAdmin } from '../api/admin.api';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	adminLoginSchema,
	type AdminLoginFormData,
} from '../schemas/adminLogin.schema';
import { useState } from 'react';

interface Props {
	email: string;
	password: string;
}

const AdminLoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AdminLoginFormData>({
		resolver: zodResolver(adminLoginSchema),
	});
	const navigate = useNavigate();
	const [serverError, setServerError] = useState<string | null>(null);

	const onSubmit = async (data: Props) => {
		try {
			setServerError(null);
			const response = await loginAdmin(data.email, data.password);

			localStorage.setItem('adminToken', response.token);

			navigate('/admin');
		} catch (error: unknown) {
			if (error instanceof Error) {
				setServerError(error.message);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
			<div>
				<input
					{...register('email')}
					placeholder='Email'
					className='w-auto border p-2 rounded'
				/>
				{errors.email && (
					<p className='text-red-500 text-sm'>{errors.email.message}</p>
				)}
			</div>
			<div>
				<input
					{...register('password')}
					type='password'
					placeholder='Password'
					className='w-auto border p-2 rounded'
				/>
				{errors.password && (
					<p className='text-red-500 text-sm'>{errors.password.message}</p>
				)}
				{serverError && (
					<p className='text-red-500 text-sm mt-2'>{serverError}</p>
				)}
			</div>
			<button
				type='submit'
				className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer'
			>
				Login
			</button>
		</form>
	);
};

export default AdminLoginPage;
