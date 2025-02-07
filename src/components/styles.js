import styled from 'styled-components';

const COLORS = {
    background: '#222',
    black: '#111',
    text: '#e5e5e5',
    white: 'white',
};

export const Container = styled.div`
    background: ${COLORS.black};
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    padding: 2rem 0;

    @media screen and (max-width: 390px) {
        width: 390px;
        height: 2480px;
        overflow-y: auto;
        padding: 60px 0;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
    }
`;

export const ContentSection = styled.div`
    width: 100%;
    max-width: 1376px;
    margin: 0 auto;
    padding: 0 2rem;

    @media screen and (max-width: 390px) {
        padding: 0 1rem;
    }

    @media screen and (min-width: 769px) {
        width: calc(100% - 216px);
        padding-left: 216px;
        display: flex;
        flex-direction: column;
    }
`;

export const ContentBlock = styled.div`
    margin-bottom: 1.25rem;
`;

export const SliderContainer = styled.div`
    width: 100%;
    margin: 1rem 0;

    .swiper {
        width: 100%;
        padding: 0;
    }

    .swiper-wrapper {
        display: flex;
        align-items: center;
    }

    .swiper-slide {
        border-radius: 16px;
        overflow: hidden;
        opacity: 0.6;
        transform: scale(0.9);
        transition: all 0.3s ease;

        &.swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            z-index: 1;
        }
    }

    @media screen and (max-width: 390px) {
        .swiper-slide {
            width: 358px !important;
            height: 456px !important;
        }
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        .swiper-slide {
            width: 736px !important;
            height: 300px !important;
        }
    }

    @media screen and (min-width: 769px) {
        .swiper-slide {
            width: 1376px !important;
            height: 573px !important;
        }
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 390px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;
    }
`;

export const GridItem = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    background: ${COLORS.background};
    border-radius: 16px;
    cursor: pointer;
    position: relative;

    @media screen and (max-width: 390px) {
        width: 114px;
        height: 168px;
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        width: 141px;
        height: 209px;
    }

    @media screen and (min-width: 769px) {
        width: 264px;
        height: 396px;
    }
`;

export const MediaCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 390px) {
        display: flex;
        overflow-x: auto;
        gap: 10px;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const MediaCard = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    background: ${COLORS.background};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 390px) {
        width: 175px;
        height: 104px;
        flex-shrink: 0;
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        width: 210px;
        height: 118.65px;
    }

    @media screen and (min-width: 769px) {
        width: 257.31px;
        height: 448px;
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    color: ${COLORS.text};
    font-size: 1.5rem;

    @media screen and (max-width: 390px) {
        padding: 0.5rem 0;
        font-size: 18px;

        span {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        font-size: 1.1rem;
        padding: 0.75rem 0;
    }

    @media screen and (min-width: 769px) {
        font-size: 1.25rem;
    }
`;

export const PlayIconWrapper = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 390px) {
        width: 48px;
        height: 48px;
    }

    @media screen and (min-width: 769px) {
        width: 72px;
        height: 72px;
    }
`;

export const TopSection = styled.div`
    margin-bottom: 1.25rem;

    .swiper {
        overflow: visible;
        margin: 0 auto;
        position: relative;
    }

    .swiper-slide {
        border-radius: 16px;
        overflow: hidden;
        opacity: 0.6;
        transform: scale(0.95);
        transition: all 0.3s ease;

        &.swiper-slide-active {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export const TopItem = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    background: ${COLORS.background};
    border-radius: 16px;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 8px;

    @media screen and (max-width: 390px) {
        width: 175px;
        height: 251px;
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        width: 211px;
        height: 314px;
    }

    @media screen and (min-width: 769px) {
        width: 264px;
        height: 396px;
    }
`;

export const TopNumber = styled.span`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const AdBanner = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    background: ${COLORS.background};
    border-radius: 16px;

    @media screen and (max-width: 390px) {
        width: 358px;
        height: 246px;
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        width: 736px;
        height: 329px;
    }

    @media screen and (min-width: 769px) {
        width: 1376px;
        height: 189px;
    }
`;

export const AdText = styled.div`
    color: ${COLORS.white};
    font-size: 1rem;
    margin-top: 1rem;
    text-align: center;

    @media screen and (max-width: 390px) {
        font-size: 12px;
        margin-top: -8px;
        font-weight: 400;
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        font-size: 14px;
        margin-top: 0.5rem;
    }

    @media screen and (min-width: 769px) {
        font-size: 16px;
        margin-top: 1rem;
    }
`;

export const ContentFooter = styled.div`
    display: none;

    @media screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 24px;
        margin-top: 40px;
        color: ${COLORS.text};
    }
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ContentLinks = styled.div`
    display: none;

    @media screen and (min-width: 769px) {
        display: flex;
        gap: 24px;
        margin-top: 40px;

        .content {
            color: ${COLORS.text};
            cursor: pointer;
        }
    }
`;

export const CircleSlider = styled.div`
    width: 100%;
    margin: 1rem 0;

    .swiper {
        padding: 0 1rem;
        margin-left: -1rem;
    }

    .swiper-slide {
        width: auto !important;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;
        background: ${COLORS.background};

        @media screen and (max-width: 390px) {
            width: 120px !important;
            height: 120px !important;
        }

        @media screen and (min-width: 391px) and (max-width: 768px) {
            width: 140px !important;
            height: 140px !important;
        }

        @media screen and (min-width: 769px) {
            display: none; // 데스크탑에서 완전히 숨김
        }
    }
`;

export const NumberLabel = styled.div`
    position: absolute;
    top: 8px;
    left: 8px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 390px) {
        font-size: 18px;
    }

    @media screen and (min-width: 391px) and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const BottomTab = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 56px;
    background-color: ${COLORS.black};
    color: ${COLORS.text};
    justify-content: space-around;
    align-items: center;
    z-index: 10;

    @media screen and (min-width: 769px) {
        display: none;
    }
`;
