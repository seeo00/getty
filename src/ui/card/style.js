import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const CardSection = styled.section`
  width: 100%;
  position: relative;
  /* .circle {
    top: calc(50% - 8%);
  } */
  /* .wide {
    top: calc(50% - 12px);
  } */
  .play {
    top: calc(50% - 22.5px);
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1.125rem;

  a {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 0.875rem;
    color: ${color.gray[70]};

    display: none;
  }

  ${respondTo('desktop')} {
    margin-bottom: 20px;
    h2 {
      font-size: 1.5rem;
      letter-spacing: -0.28px;
    }

    span {
      display: block;
    }
  }
`;

export const CardList = styled.div`
  position: relative;
  .swiper {
    overflow: visible;
    ${respondTo('desktop')} {
      overflow: hidden;
    }
  }
`;

export const NavButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  z-index: 10;
  ${(props) => (props.$position === 'left' ? 'left: -42px;' : 'right: -42px;')};
  transition: all 0.3s ease;
  ${respondTo('desktop')} {
    display: block;
  }
  &.swiper-button-disabled {
    opacity: 0.3;
    cursor: default;
  }
`;
