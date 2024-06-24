import './index.scss';

function Contact() {
    return ( 
        <div className='contact'>
            <div className="contact__container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="contact__inner">
                            <div className="mb-10">
                                <div className="contact__title">
                                    Location
                                </div>
                                <div className="contact__desc">
                                    Get directions to our event center
                                </div>
                            </div>
                            <div className="mb-8">
                                <div className="contact__textbox">
                                    <h3>Address:</h3>
                                    <p>01 Pascale Springs Apt. 339, NY City United State</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-8">
                                <div className="w-full lg:w-1/2">
                                    <div className="contact__textbox px-3">
                                        <h3>Phone:</h3>
                                        <p>+123 4567 8910</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="contact__textbox px-3">
                                        <h3>EMAIL:</h3>
                                        <p>johndoe@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="contact__textbox">
                                    <h3>WORKING HOURS:</h3>
                                    <p>08.00am - 21.00pm Weekdays</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" allowFullScreen="" className="w-full h-full min-h-[500px]"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;