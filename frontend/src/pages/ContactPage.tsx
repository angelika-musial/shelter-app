import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
	return (
		<div className='max-w-3xl mx-auto p-2'>
			<h1 className='text-3xl font-bold mb-4'>Contact Us</h1>

			<p className='text-gray-600 mb-8'>
				Have a question about adoption or our shelter? Send us a message and
				we’ll get back to you.
			</p>

			<ContactForm />
		</div>
	);
};

export default ContactPage;
