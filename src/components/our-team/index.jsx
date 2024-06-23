import './index.scss';
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaFacebookF, FaTwitter  } from "react-icons/fa";

function OurTeam({data}) {
    return (  
        <div className='our-team'>
            <div className="section-title">WHAT WE DO?</div>
            <div className="divider"></div>
            <div className="our-team__container">
                <div className="our-team__inner">
                    {data.map((member, index) => (
                        <div className="our-team__col" key={index}>
                            <div className="our-team__member">
                                <div className="our-team__member-picture">
                                    <img src={member.picture} alt="team" />
                                    <div className="our-team__member-social">
                                        <a className="ms_envelope" href="#"><RxEnvelopeClosed/></a>
                                        <a className="ms_facebook" href="#"><FaFacebookF/></a>
                                        <a className="ms_twitter" href="#"><FaTwitter /></a>
                                    </div>
                                </div>
                                <div className="our-team__member-title">
                                    {member.name}
                                </div>
                                <div className="our-team__member-desc">
                                    {member.position}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default OurTeam;