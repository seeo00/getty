// components/main/CircleMenu/CircleMenu.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CircleMenuBox } from './style';
import 'swiper/css';
import 'swiper/css/navigation';

const CircleMenu = () => {
    const categories = [
        { id: 1, name: '드라마', image: '/images/cat-drama.jpg' },
        { id: 2, name: '영화', image: '/images/cat-movie.jpg' },
        { id: 3, name: '예능', image: '/images/cat-variety.jpg' },
        { id: 4, name: '애니메이션', image: '/images/cat-anime.jpg' },
        { id: 5, name: '다큐멘터리', image: '/images/cat-documentary.jpg' },
        { id: 6, name: '스포츠', image: '/images/cat-sports.jpg' },
        { id: 7, name: '해외시리즈', image: '/images/cat-overseas.jpg' },
        { id: 8, name: '키즈', image: '/images/cat-kids.jpg' }
    ];

    return (
        <CircleMenuBox>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={7}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 3, spaceBetween: 10 },
                    768: { slidesPerView: 5, spaceBetween: 15 },
                    1024: { slidesPerView: 7, spaceBetween: 20 }
                }}
            >
                {categories.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="circle-item">
                            <div className="img-wrap">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <span>{item.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </CircleMenuBox>
    );
};

export default CircleMenu;