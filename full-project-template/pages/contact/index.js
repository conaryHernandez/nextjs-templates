import Head from 'next/head';
import ContactForm from '../../components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Next Blog' />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
