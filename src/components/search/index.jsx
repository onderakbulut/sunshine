import './index.scss';
import { FaTimes } from "react-icons/fa";

function Search() {

    const closeModal = () => {
        document.querySelector('.search-modal').classList.remove('-active');
    }
    return (  
        <div className={`search-modal`}>
            <div className="search-modal__inner">
                <button className='search-modal__close' onClick={closeModal}>
                    <FaTimes/>
                </button>
                <form className="search-modal__form">
                    <input type="text" id="search-input" placeholder="Search here....." />
                </form>
            </div>
        </div>
    );
}

export default Search;