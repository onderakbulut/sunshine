import './index.scss';
import { Link } from 'react-router-dom';

function PageBanner({title, link}) {
    return ( 
    <div className="banner">
        <div className="banner__inner">
            <div className="banner__text">
                <h2>{ title }</h2>

                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    / <span className='-active'>{link}</span>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default PageBanner;