// components/main/ContentSection/ContentSection.jsx
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ContentSectionBox, ContentCard } from './style';
import 'swiper/css';
import 'swiper/css/navigation';

const ContentSection = ({ title, data }) => {
    return (
        <ContentSectionBox>
            <div className="section-title">
                <h2>{title}</h2>
                <button className="more-btn">더보기</button>
            </div>
            <div className="content-slide">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    slidesPerView={5}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 5, spaceBetween: 20 }
                    }}
                >
                    {data.map(item => (
                        <SwiperSlide key={item.id}>
                            <ContentCard>
                                <div className="img-box">
                                    <img src={item.imgUrl} alt={item.title} />
                                    <div className="play-btn" />
                                </div>
                                <div className="info">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </ContentCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </ContentSectionBox>
    );
};

ContentSection.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
            desc: PropTypes.string
        })
    ).isRequired
};

export default ContentSection;