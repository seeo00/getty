import styled from 'styled-components';

const COLORS = {
    background: '#222',
    text: '#e5e5e5',
    white: 'white',
};

const SIZES = {
    mobile: {
        width: 175,
        height: 251,
        padding: 8,
    },
    desktop: {
        width: 200,
        height: 280,
        padding: 12,
    },
};

const responsiveItemStyle = `
    background: ${COLORS.background};
    border-radius: 16px;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 8px;
    outline: none;
    border: none;
    
    @media screen and (min-width: 768px) {
        width: ${SIZES.desktop.width}px;
        height: ${SIZES.desktop.height}px;
        padding: ${SIZES.desktop.padding}px;
    }
`;

export const SliderSectionContainer = styled.div`
    width: 100%;
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
        opacity: 0.4;
        transform: scale(0.95);
        transition: all 0.3s ease;
        outline: none;
        border: none;

        &.swiper-slide-active {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    color: ${COLORS.text};
    font-size: 18px;

    span {
        font-size: 18px;

        &:first-child {
            flex-grow: 1;
        }

        &:last-child {
            cursor: pointer;
            text-align: right;
        }
    }
`;

export const TopItem = styled.div`
    width: ${SIZES.mobile.width}px;
    height: ${SIZES.mobile.height}px;
    ${responsiveItemStyle}
`;

export const SlideContent = styled.div`
    width: ${SIZES.mobile.width}px;
    height: ${SIZES.mobile.height}px;
    ${responsiveItemStyle}
    color: ${COLORS.white};
`;

export const TopNumber = styled.span`
    color: ${COLORS.white};
    font-size: 18px;
    font-weight: bold;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
`;

export const GridItem = styled.div`
    width: 100%;
    height: 200px;
    background: ${COLORS.background};
    border-radius: 16px;

    @media screen and (min-width: 768px) {
        height: 250px;
    }
`;

export const MediaCardContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`;

export const MediaCard = styled.div`
    width: 100%;
    height: 200px;
    background: ${COLORS.background};
    border-radius: 16px;
    position: relative;

    @media screen and (min-width: 768px) {
        height: 250px;
    }
`;

export const PlayIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
// styles.js에 추가
export const ContentBlock = styled.div`
    margin-bottom: 20px; // 필요에 따라 스타일 조정
    width: 100%;
`;
export const Container = styled.div`
    width: 100%;
    max-width: 1200px; // 필요에 따라 조정
    margin: 0 auto;
    padding: 0 16px; // 좌우 패딩 추가
`;

export const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px; // 섹션 사이 간격
    width: 100%;
`;
