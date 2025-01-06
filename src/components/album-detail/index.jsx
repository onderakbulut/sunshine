import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './index.scss';

function AlbumDetail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const albumData = [
        {
            image: './img/album-detail/1.jpg',
            category: 'Photography / Flower',
            title: 'Flower In Door'
        },
        {
            image: './img/album-detail/2.jpg',
            category: 'Photography / Flower',
            title: 'Flower In Door'
        },
        {
            image: './img/album-detail/3.jpg',
            category: 'Photography / Flower',
            title: 'Flower In Door'
        },
        {
            image: './img/album-detail/4.jpg',
            category: 'Photography / Flower',
            title: 'Flower In Door'
        },
        {
            image: './img/album-detail/5.jpg',
            category: 'Photography / Flower',
            title: 'Flower In Door'
        },
        {
            image: './img/album-detail/6.jpg',
            category: 'Photography / Flower',
            title: 'Flower In Door'
        },
        {
            image: './img/album-detail/7.jpg',
            category: 'Photography / Flower',
            title: 'Flower In Door'
        },
        {
            image: './img/album-detail/8.jpg',
            category: 'Photography / Flower',
            title: 'Flower In Door'
        }
    ];

    return (
        <div className="album-detail">
            <div className="album-detail__container">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {albumData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.image} />
                            <div className="slide__content">
                                <div className="container">
                                    <p>{item.category}</p>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={false}
                    spaceBetween={20}
                    slidesPerView={8}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="myThumbs"
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
                >
                    {albumData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default AlbumDetail;