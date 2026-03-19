import { useForm } from 'react-hook-form';
import { loginAdmin } from '../api/admin.api';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	adminLoginSchema,
	type AdminLoginFormData,
} from '../schemas/adminLogin.schema';
import toast from 'react-hot-toast';

const AdminLoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AdminLoginFormData>({
		resolver: zodResolver(adminLoginSchema),
	});

	const navigate = useNavigate();

	const onSubmit = async (data: AdminLoginFormData) => {
		try {
			const response = await loginAdmin(data.email, data.password);

			localStorage.setItem('adminToken', response.token);
			navigate('/admin/dashboard');
			toast.success('Logged in successfully!');
		} catch {
			toast.error('Invalid credentials', { id: 'loginError' });
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-800'>
			<div className='bg-gray-100 p-8 rounded-xl w-full max-w-md'>
				<h1 className='text-2xl font-bold mb-6 text-center'>Admin Login</h1>

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<div>
						<input
							{...register('email')}
							placeholder='Email'
							className='w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						{errors.email && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<input
							{...register('password')}
							type='password'
							placeholder='Password'
							className='w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						{errors.password && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.password.message}
							</p>
						)}
					</div>

					<button
						type='submit'
						className='w-full bg-blue-600 text-white text-lg mt-2 py-2 rounded hover:bg-blue-700 transition cursor-pointer'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default AdminLoginPage;
