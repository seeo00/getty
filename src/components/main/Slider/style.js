import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

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
    border-radius: 1rem;
    overflow: hidden;
    opacity: 0.6;
    transform: scale(0.9);
    transition: all 0.3s ease;
    background: ${color.gray[700]};

    &.swiper-slide-active {
      opacity: 1;
      transform: scale(1);
      z-index: 1;
    }

    ${respondTo('mobile')} {
      border-radius: 0.8rem;
    }
  }
`;
