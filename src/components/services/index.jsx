import './index.scss';
import AboutData from "@/data/about.json";

function Services() {
    return ( 
        <div className='services'>
            <div className="section-title">WHAT WE DO?</div>
            <div className="divider"></div>
            <div className="services__container">
                <div className="services__inner">
                    {AboutData.services.map((service, index) => (
                        <div className="services__col" key={index}>
                            <h5>{service.title}</h5>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;