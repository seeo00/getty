import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdPlayArrow } from 'react-icons/md';
import 'swiper/css';

const Container = styled.div`
    background: #111;
    padding: 60px 0 60px 0;
    width: 390px;
    height: 2480px;
    overflow-y: auto;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;

    @media screen and (max-width: 390px) {
        width: 100%;
    }
`;

const SliderSection = styled.div`
    width: 100%;
    padding: 1rem 0;
    position: relative;

    .swiper {
        overflow: visible;
        margin: 0 auto;
        position: relative;
        width: 100%;
        padding: 0 20px;
    }

    .swiper-wrapper {
        display: flex;
        align-items: center;
    }

    .swiper-slide {
        width: 320px !important;
        height: 456px !important;
        border-radius: 16px;
        overflow: hidden;
        opacity: 0.4;
        transform: scale(0.85);
        transition: all 0.3s ease;
        margin: 0 10px;

        &.swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            z-index: 1;
        }
    }
`;

const SlideContent = styled.div`
    background: #222;
    width: 358px;
    height: 456px;
    border-radius: 16px;
`;

const ContentSection = styled.div`
    padding: 0 1rem;
`;

const ContentBlock = styled.div`
    margin-bottom: 1.25rem;
`;

const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    color: #e5e5e5;
    font-size: 18px;

    span {
        font-size: 18px;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
`;

const GridItem = styled.div`
    width: 114px;
    height: 168px;
    background: #222;
    border-radius: 16px;
    cursor: pointer;
`;

const MediaCardContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const MediaCard = styled.div`
    width: 175px;
    height: 104px;
    background: #222;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayIconWrapper = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TopSection = styled.div`
    margin-bottom: 1.25rem;

    .swiper {
        overflow: visible;
        margin: 0 auto;
        position: relative;
    }

    .swiper-slide {
        border-radius: 16px;
        overflow: hidden;
        opacity: 0.4;
        transform: scale(0.95);
        transition: all 0.3s ease;

        &.swiper-slide-active {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

const TopItem = styled.div`
    width: 175px;
    height: 251px;
    background: #222;
    border-radius: 16px;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 8px;
`;

const TopNumber = styled.span`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const MainContent = () => {
    return (
        <Container>
            <SliderSection>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    initialSlide={1}
                    speed={400}
                >
                    <SwiperSlide>
                        <SlideContent>슬라이드 1</SlideContent>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideContent>슬라이드 2</SlideContent>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideContent>슬라이드 3</SlideContent>
                    </SwiperSlide>
                </Swiper>
            </SliderSection>

            <ContentSection>
                <ContentBlock>
                    <ContentHeader>
                        <span>믿고 보는 웨이브 에디터 추천작</span>
                        <span>{'>'}</span>
                    </ContentHeader>
                    <GridContainer>
                        <GridItem />
                        <GridItem />
                        <GridItem />
                    </GridContainer>
                </ContentBlock>

                <ContentBlock>
                    <ContentHeader>
                        <span>믿고 보는 웨이브 에디터 추천작</span>
                        <span>{'>'}</span>
                    </ContentHeader>
                    <GridContainer>
                        <GridItem />
                        <GridItem />
                        <GridItem />
                    </GridContainer>
                </ContentBlock>

                <ContentBlock>
                    <ContentHeader>
                        <span>믿고 보는 웨이브 에디터 추천작</span>
                        <span>{'>'}</span>
                    </ContentHeader>
                    <MediaCardContainer>
                        <MediaCard>
                            <PlayIconWrapper>
                                <MdPlayArrow size={32} color="white" />
                            </PlayIconWrapper>
                        </MediaCard>
                        <MediaCard>
                            <PlayIconWrapper>
                                <MdPlayArrow size={32} color="white" />
                            </PlayIconWrapper>
                        </MediaCard>
                    </MediaCardContainer>
                </ContentBlock>

                <TopSection>
                    <ContentHeader>오늘의 영화 TOP 20</ContentHeader>
                    <Swiper slidesPerView={2.2} spaceBetween={10} loop={true} speed={400}>
                        {[...Array(20)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <TopItem>
                                    <TopNumber>{index + 1}</TopNumber>
                                </TopItem>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TopSection>

                <ContentBlock>
                    <ContentHeader>
                        <span>믿고 보는 웨이브 에디터 추천작</span>
                        <span>{'>'}</span>
                    </ContentHeader>
                    <div
                        style={{
                            background: '#222',
                            width: '358px',
                            height: '204px',
                            borderRadius: '16px',
                        }}
                    />
                </ContentBlock>
                <div
                    style={{
                        color: '#ffffff',
                        fontSize: '12px',
                        marginTop: '-8px',
                        fontWeight: '400',
                    }}
                >
                    모텔 캘리포니아 1월 10일
                    <br />밤 9시 50분 첫 방송!
                </div>
            </ContentSection>
        </Container>
    );
};