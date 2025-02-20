import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import * as S from './style';
import styled, { css } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { respondTo } from '../../styled/GlobalStyle';
import { ArrowLeftIcon, ArrowRightIcon } from '../../ui/icon';
import { mainBannerData } from '../../assets/api/mainBannerData';
import { color } from '../../styled/common';

const SwiperUpdateOnCollapse = ({ isCollapsed, swiperInstance }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      const timer = setTimeout(() => {
        swiper.update();
        swiper.autoplay.start();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isCollapsed, swiper]);

  return null;
};

const LogoImage = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  transform: translateY(20px);
  opacity: 0;

  ${({ $isAnimated }) =>
    $isAnimated &&
    css`
      transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;

      .swiper-slide-active & {
        opacity: 1;
        transform: translateY(0);
      }
    `}

  img {
    width: 50% !important;
    min-width: 240px;
    height: auto;
  }

  ${respondTo('desktop')} {
    bottom: 40px;
    left: 40px;
    img {
      width: 60% !important;
    }
  }
`;

const BannerSwiper = () => {
  const { isCollapsed } = useSelector((state) => state.mainR);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      setIsAnimated(false);
    };
  }, []);

  return (
    <S.BannerWrap>
      <InnerContainer maxWidth="1460px" className="inner">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={8}
          slidesPerView={'auto'}
          centeredSlides={true}
          observer={true}
          observeParents={true}
          resizeObserver={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          speed={600}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            swiper.autoplay.start();
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          loop={true}
          initialSlide={0}
          watchOverflow={true}
          breakpoints={{
            1280: { spaceBetween: 12 },
          }}
        >
          <SwiperUpdateOnCollapse isCollapsed={isCollapsed} swiperInstance={swiperInstance} />
          {mainBannerData.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <S.SlideContainer>
                {/* <img src={item.banner} alt={item.title || item.name} /> */}
                <S.ResponsiveBannerImage
                  src={item.banner}
                  $mobileSrc={item.banner_mobile}
                  alt={item.title || item.name}
                />
                <LogoImage $isAnimated={isAnimated}>
                  <img src={item.logo} alt="" />
                </LogoImage>
              </S.SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>
        <S.NavButton ref={prevRef} $prev>
          <ArrowLeftIcon size={40} color={color.white} />
        </S.NavButton>
        <S.NavButton ref={nextRef} $next>
          <ArrowRightIcon size={40} color={color.white} />
        </S.NavButton>
      </InnerContainer>
    </S.BannerWrap>
  );
};

export default BannerSwiper;
