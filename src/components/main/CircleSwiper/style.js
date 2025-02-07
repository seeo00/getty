import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

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
    background: ${color.gray[700]};

    ${respondTo('mobile')} {
      width: 8rem !important;
      height: 8rem !important;
    }
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: ${color.white};
  font-size: 1rem;
`;
