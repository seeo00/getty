import * as S from './style';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { originalData } from '../../assets/api/originalData';
import BasicCardSwiper from '../../ui/card/BasicCardSwiper';
import CircleCardSwiper from '../../ui/card/CircleCardSwiper';
import WideCardSwiper from '../../ui/card/WideCardSwiper';
import PlayCardSwiper from '../../ui/card/PlayCardSwiper';
import TextContent from '../../components/main/TextContent';
import { BannerSwiper } from '../../components/main/BannerSwiper';

const Main = () => {
  const filteredData = originalData.filter((item) => item.logo);

  return (
    <>
      <BannerSwiper />
      <S.SectionArea>
        <InnerContainer maxWidth="1460px" className="inner">
          <CircleCardSwiper items={filteredData} title="오리지널 대표 콘텐츠" />
          <BasicCardSwiper items={originalData} title="믿고 보는 에디터 추천작" rank />
          <BasicCardSwiper items={originalData} title="믿고 보는 에디터 추천작" />
          <WideCardSwiper items={originalData} title="하기 싫은 날 보기 좋은 콘텐츠" />
          <WideCardSwiper items={originalData} title="하기 싫은 날 보기 좋은 콘텐츠" showInfo />
          <BasicCardSwiper items={originalData} title="믿고 보는 에디터 추천작" />
          <PlayCardSwiper items={originalData} title="졸립당" />
          <BasicCardSwiper items={originalData} title="믿고 보는 에디터 추천작" />
          <TextContent title="아직 고민 중이신가요?" />
        </InnerContainer>
      </S.SectionArea>
    </>
  );
};

export default Main;

// import * as S from './style';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Autoplay, Navigation } from 'swiper/modules';
// import { useSelector } from 'react-redux';
// import { InnerContainer } from '../../common/layout/InnerContainer';
// import { useEffect, useRef, useState } from 'react';
// import { originalData } from '../../assets/api/originalData';
// import BasicCardSwiper from '../../ui/card/BasicCardSwiper';
// import { mainBannerData } from '../../assets/api/mainBannerData';
// import CircleCardSwiper from '../../ui/card/CircleCardSwiper';
// import WideCardSwiper from '../../ui/card/WideCardSwiper';
// import PlayCardSwiper from '../../ui/card/PlayCardSwiper';
// import styled, { css } from 'styled-components';
// import { respondTo } from '../../styled/GlobalStyle';
// import { ArrowLeftIcon, ArrowRightIcon } from '../../ui/icon';
// import TextContent from '../../components/main/TextContent';
// import { BannerSwiper } from '../../components/main/BannerSwiper';

// const SwiperUpdateOnCollapse = ({ isCollapsed, swiperInstance }) => {
//   const swiper = useSwiper();

//   useEffect(() => {
//     if (swiper) {
//       const timer = setTimeout(() => {
//         swiper.update();
//         swiper.autoplay.start(); // 업데이트 후 자동 재생 재시작
//       }, 300);

//       return () => clearTimeout(timer); // 클린업 추가
//     }
//   }, [isCollapsed, swiper]);

//   return null;
// };

// const LogoImage = styled.div`
//   position: absolute;
//   bottom: 16px;
//   left: 16px;
//   transform: translateY(20px);
//   opacity: 0;

//   ${({ $isAnimated }) =>
//     $isAnimated &&
//     css`
//       transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;

//       .swiper-slide-active & {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     `}

//   img {
//     width: 50% !important;
//     min-width: 240px;
//     height: auto;
//   }

//   ${respondTo('desktop')} {
//     bottom: 40px;
//     left: 40px;
//     img {
//       width: 60% !important;
//     }
//   }
// `;

// const Main = () => {
//   const { isCollapsed } = useSelector((state) => state.mainR);
//   const [swiperInstance, setSwiperInstance] = useState(null);
//   const [isAnimated, setIsAnimated] = useState(false);
//   const filteredData = originalData.filter((item) => item.logo);

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsAnimated(true);
//     }, 100);

//     return () => {
//       clearTimeout(timer);
//       setIsAnimated(false);
//     };
//   }, []);

//   return (
//     <>
//       <S.BannerWrap>
//         <InnerContainer maxWidth="1460px" className="inner">
//           <Swiper
//             modules={[Autoplay, Navigation]}
//             spaceBetween={8}
//             slidesPerView={'auto'}
//             centeredSlides={true}
//             observer={true}
//             observeParents={true}
//             navigation={{
//               prevEl: prevRef.current,
//               nextEl: nextRef.current,
//             }}
//             speed={600}
//             onSwiper={(swiper) => {
//               setSwiperInstance(swiper);
//               swiper.autoplay.start();
//             }}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               waitForTransition: true,
//             }}
//             loop={true}
//             initialSlide={0}
//             watchOverflow={true}
//             breakpoints={{
//               1280: { spaceBetween: 12 },
//             }}
//           >
//             <SwiperUpdateOnCollapse isCollapsed={isCollapsed} swiperInstance={swiperInstance} />
//             {mainBannerData.map((item, index) => (
//               <SwiperSlide key={item.id || index}>
//                 <S.SlideContainer>
//                   <img src={item.banner} alt={item.title || item.name} />
//                   <LogoImage $isAnimated={isAnimated}>
//                     <img src={item.logo} alt="" />
//                   </LogoImage>
//                 </S.SlideContainer>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <S.NavButton ref={prevRef} $prev>
//             <ArrowLeftIcon size={40} />
//           </S.NavButton>
//           <S.NavButton ref={nextRef} $next>
//             <ArrowRightIcon size={40} />
//           </S.NavButton>
//         </InnerContainer>
//       </S.BannerWrap>

//       <S.SectionArea>
//         <InnerContainer maxWidth="1460px" className="inner">
//           <CircleCardSwiper items={filteredData} title="오리지널 대표 콘텐츠" />
//           <BasicCardSwiper items={originalData} title="믿고 보는 에디터 추천작" rank />
//           <BasicCardSwiper items={originalData} title="믿고 보는 에디터 추천작" />
//           <WideCardSwiper items={originalData} title="하기 싫은 날 보기 좋은 콘텐츠" />
//           <BasicCardSwiper items={originalData} title="믿고 보는 에디터 추천작" />
//           <PlayCardSwiper items={originalData} title="졸립당" />
//           <BasicCardSwiper items={originalData} title="믿고 보는 에디터 추천작" />
//           <TextContent title="아직 고민 중이신가요?" />
//         </InnerContainer>
//       </S.SectionArea>
//     </>
//   );
// };

// export default Main;
