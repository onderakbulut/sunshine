import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

function ContactPage() {
    return (  
        <div>
            <Header/>
            <iframe className='w-full h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" allowfullscreen=""></iframe>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default ContactPage;