// styles.js
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media screen and (max-width: 390px) {
        padding: 0 1rem;
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
        padding: 1rem 0;
        position: relative;

        .swiper {
            overflow: visible;
            margin: 0 auto;
            padding: 0 20px;
        }

        .swiper-slide {
            width: 320px !important;
            height: 456px !important;
            margin: 0 10px;
        }
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
`;

export const GridItem = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    background: ${COLORS.background};
    border-radius: 16px;
    cursor: pointer;

    @media screen and (max-width: 390px) {
        width: 114px;
        height: 168px;
    }
`;

export const MediaCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    @media screen and (max-width: 390px) {
        display: flex;
        overflow-x: auto;
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
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    color: ${COLORS.text};
    font-size: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 390px) {
        padding: 0.5rem 0;
        font-size: 18px;

        span {
            font-size: 18px;
        }
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
        height: 204px;
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
`;
