interface ConfirmModalProps {
	title: string;
	description: string;
	onConfirm: () => void;
	onCancel: () => void;
}

const ConfirmModal = ({
	title,
	description,
	onConfirm,
	onCancel,
}: ConfirmModalProps) => {
	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
			<div className='bg-white p-6 rounded-xl w-96'>
				<h3 className='text-lg font-bold'>{title}</h3>
				<p className='mt-2 text-gray-600'>{description}</p>

				<div className='flex justify-end gap-3 mt-6'>
					<button onClick={onCancel} className="cursor-pointer hover:bg-gray-100 px-3 py-1 rounded">Cancel</button>
					<button
						onClick={onConfirm}
						className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600'
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmModal;
