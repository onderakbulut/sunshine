import './index.scss';

function ContactForm() {
    return (  
        <div className="contact-form">
            <div className="contact-form__container">
                <div className="contact-form__inner">
                    <div className="w-full lg:w-4/12 px-3">
                        <div className="mb-10">
                            <img src="./logo.svg" alt="" />
                        </div>
                        <div className="mb-8">
                            <div className="contact__textbox">
                                <h3>Address:</h3>
                                <p>01 Pascale Springs Apt. 339, NY City United State</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-8 break-words">
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
                    <div className="w-full lg:w-8/12 px-3">
                        <div className="contact-form__box">
                            <h2>Contact Form</h2>
                            <form action="">                
                                <input type="text" placeholder="Your Name" />
                                <input type="text" placeholder="Your Email" />
                                <input type="text" placeholder="Subject" />
                                <textarea placeholder="Your Messages"></textarea>
                                <button className="btn-submit">SEND MESSAGES</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;