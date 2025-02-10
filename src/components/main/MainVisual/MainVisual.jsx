// components/main/MainVisual/MainVisual.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MainVisualBox } from './style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainVisual = () => {
    const mainData = [
        {
            id: 1,
            imgUrl: '/images/visual1.jpg',
            title: '새로운 오리지널 시리즈',
            desc: '웨이브에서만 볼 수 있는 독점 오리지널 시리즈를 만나보세요.',
            category: '오리지널'
        },
        {
            id: 2,
            imgUrl: '/images/visual2.jpg',
            title: '화제의 신작',
            desc: '지금 가장 주목받는 작품, 지금 바로 시청하세요.',
            category: '신작'
        },
        {
            id: 3,
            imgUrl: '/images/visual3.jpg',
            title: '인기 시리즈',
            desc: '놓치면 안 되는 인기 콘텐츠를 만나보세요.',
            category: '인기'
        }
    ];

    return (
        <MainVisualBox>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop={true}
                speed={800}
            >
                {mainData.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="visual-item">
                            <img src={item.imgUrl} alt={item.title} />
                            <div className="text-content">
                                <span className="category">{item.category}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="btn-group">
                                    <button className="play-btn">
                                        <span>▶</span>재생하기
                                    </button>
                                    <button className="detail-btn">상세정보</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </MainVisualBox>
    );
};

export default MainVisual;