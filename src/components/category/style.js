import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const Container = styled.section`
  width: 100%;
  padding: 20px 0 40px 0;
  background-color: rgba(44, 44, 44, 0.8);
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    radial-gradient(90.37% 76.15% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%); */

  ${respondTo('desktop')} {
    padding: 40px 0 100px 0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 24px;
  span {
    font-size: 0.75rem;
    color: ${color.gray[40]};
  }
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: -0.28px;
    color: ${color.white};
  }
  p {
    font-size: 0.875rem;
    color: ${color.gray[10]};
  }
  ${respondTo('desktop')} {
    span {
      font-size: 1rem;
    }
    h2 {
      font-size: 2.25rem;
      letter-spacing: -0.44px;
    }
    p {
      font-size: 1.25rem;
      letter-spacing: -0.2px;
    }
  }
`;

export const CardList = styled.div`
  position: relative;

  .swiper {
    overflow: visible;
    ${respondTo('desktop')} {
      overflow: hidden;
      margin: 0 -2%;
    }
  }
  .swiper-slide {
    transition: transform 0.3s;
    opacity: 0.5;
    transform: scale(0.8);

    &.swiper-slide-active {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  cursor: grab;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  button {
    flex-shrink: 0;
    &:first-child {
      margin-left: 16px;
    }
    &:last-child {
      margin-right: 16px;
    }
  }
  padding: 16px 0 26px 0;
  ${respondTo('tabletMore')} {
    padding: 16px 0 40px 0;
  }
  ${respondTo('desktop')} {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px 40px 40px 40px;

    button {
      &:first-child,
      &:last-child {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  ${respondTo('desktop')} {
    gap: 12px;
  }
  > div {
    flex-basis: calc(33.3333% - (16px / 3));

    ${respondTo('tabletMore')} {
      flex-basis: calc(20% - (32px / 5));
    }

    ${respondTo('desktop')} {
      flex-basis: calc(20% - (48px / 5));
    }
  }
`;
