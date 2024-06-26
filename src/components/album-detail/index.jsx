import './index.scss';
import Header from '../header';
import Footer from '../footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useState } from 'react';

function AlbumDetail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='album-detail'>
            <Header />
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-size' : '14px',
                }}
                loop={false}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./img/album-detail/1.jpg" />
                    <div className="slide__content">
                        <div className="container">
                            <p>Photography / Flower</p>
                            <h2>Flower In Door</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./img/album-detail/2.jpg" />
                    <div className="slide__content">
                        <div className="container">
                            <p>Photography / Flower</p>
                            <h2>Flower In Door</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./img/album-detail/3.jpg" />
                    <div className="slide__content">
                        <div className="container">
                            <p>Photography / Flower</p>
                            <h2>Flower In Door</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./img/album-detail/4.jpg" />
                    <div className="slide__content">
                        <div className="container">
                            <p>Photography / Flower</p>
                            <h2>Flower In Door</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./img/album-detail/5.jpg" />
                    <div className="slide__content">
                        <div className="container">
                            <p>Photography / Flower</p>
                            <h2>Flower In Door</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./img/album-detail/6.jpg" />
                    <div className="slide__content">
                        <div className="container">
                            <p>Photography / Flower</p>
                            <h2>Flower In Door</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./img/album-detail/7.jpg" />
                    <div className="slide__content">
                        <div className="container">
                            <p>Photography / Flower</p>
                            <h2>Flower In Door</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./img/album-detail/8.jpg" />
                    <div className="slide__content">
                        <div className="container">
                            <p>Photography / Flower</p>
                            <h2>Flower In Door</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={20}
                slidesPerView={8}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    512: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 8,
                    },
                }}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="myThumbs"
            >
                <SwiperSlide><img src="./img/album-detail/1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./img/album-detail/2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./img/album-detail/3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./img/album-detail/4.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./img/album-detail/5.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./img/album-detail/6.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./img/album-detail/7.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./img/album-detail/8.jpg" /></SwiperSlide>
            </Swiper>
            <Footer />
        </div>
    );
}

export default AlbumDetail;