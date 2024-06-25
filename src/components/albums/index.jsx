import './index.scss';
import { Link } from 'react-router-dom';

function Albums() {
    return (  
        <div className='albums'>
            <div className="albums__inner">
                <div className="w-full lg:w-4/12">
                    <div className="albums__item">
                        <img src="./img/albums/1.jpg" alt="" />
                        <Link to="/album-detail" className='albums__link'>
                            Flower Summer (12)
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-8/12 flex flex-wrap gap-y-6">
                    <div className="w-full lg:w-4/12">
                        <div className="albums__item">
                            <img src="./img/albums/2.jpg" alt="" />
                            <Link to="/album-detail" className='albums__link'>
                                TRAVEL 2019 (22)
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <div className="albums__item">
                            <img src="./img/albums/3.jpg" alt="" />
                            <Link to="/album-detail" className='albums__link'>
                                PHOTO STREET (17)
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <div className="albums__item">
                            <img src="./img/albums/4.jpg" alt="" />
                            <Link to="/album-detail" className='albums__link'>
                                CUISINE RESTAURANT (22)
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-4/12">
                    <div className="albums__item">
                        <img src="./img/albums/5.jpg" alt="" />
                        <Link to="/album-detail" className='albums__link'>
                            JUNGLE NATURE (30)
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-8/12 flex flex-wrap gap-y-6">
                    <div className="w-full lg:w-8/12">
                        <div className="albums__item">
                            <img src="./img/albums/6.jpg" alt="" />
                            <Link to="/album-detail" className='albums__link'>
                                CAR WEDDING (25)
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <div className="albums__item">
                            <img src="./img/albums/7.jpg" alt="" />
                            <Link to="/album-detail" className='albums__link'>
                                TECHNOLOGY (18)
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-4/12">
                    <div className="albums__item">
                        <img src="./img/albums/8.jpg" alt="" />
                        <Link to="/album-detail" className='albums__link'>
                            LIFE STYLE (27)
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-8/12 flex flex-wrap gap-y-6">
                    <div className="w-full lg:w-4/12">
                        <div className="albums__item">
                            <img src="./img/albums/9.jpg" alt="" />
                            <Link to="/album-detail" className='albums__link'>
                                WEDDING STORY (18)
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <div className="albums__item">
                            <img src="./img/albums/10.jpg" alt="" />
                            <Link to="/album-detail" className='albums__link'>
                                FASHION WINTER (09)
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <div className="albums__item">
                            <img src="./img/albums/11.jpg" alt="" />
                            <Link to="/album-detail" className='albums__link'>
                                FUNITURE (32)
                            </Link>
                        </div>
                    </div>

                </div>
                
                
            </div>
        </div>
    );
}

export default Albums;