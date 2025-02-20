import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';
import { Link } from 'react-router-dom';

// 배너 스와이퍼
export const BannerWrap = styled.div`
  .inner {
    position: relative;
  }
  .swiper {
    overflow: visible;
  }
`;

export const SlideContainer = styled(Link)`
  display: block;
  position: relative;
  aspect-ratio: 4 / 5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    //object-position: right;
  }
  ${respondTo('tabletMore')} {
    aspect-ratio: auto;
    //max-height: 689px;
  }
`;

export const ResponsiveBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${respondTo('tabletMore')} {
    content: url(${(props) => props.src});
  }

  @media (max-width: 600px) {
    content: url(${(props) => props.$mobileSrc || props.src});
  }
`;

export const NavButton = styled.button`
  display: none;

  ${respondTo('desktop')} {
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }

    ${({ $prev }) => $prev && `left: -8px;`}
    ${({ $next }) => $next && `right: -8px;`}
  }
`;

// 텍스트 버튼 섹션

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1.125rem;

  button {
    font-size: 0.875rem;
    color: ${color.gray[70]};
  }

  ${respondTo('desktop')} {
    margin-bottom: 20px;
    h2 {
      font-size: 1.5rem;
      letter-spacing: -0.28px;
    }
  }
`;

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;

  a {
    color: ${color.gray[70]};
    display: flex;
    align-items: center;
    gap: 12px;
    height: 52px;
    border-bottom: 1px solid ${color.gray[70]};
    //transition: color 0.3s;
    &:hover {
      color: ${color.white};
    }
  }
  ${respondTo('desktop')} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 16px;
    a {
      height: 60px;
    }
  }
`;
