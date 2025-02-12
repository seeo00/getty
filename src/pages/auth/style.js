import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  /* padding-top: 40px; */
  padding: 0 16px;

  ${respondTo('tabletMore')} {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${respondTo('laptop')} {
    display: grid;
    grid-template-columns: 1fr 660px;
    /* gap: 40px; */
  }
`;

export const LeftBox = styled.div`
  display: none;

  ${respondTo('tabletMore')} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.5);

    background: url(/images/slide-sec.png) no-repeat 0 0 / cover;
    background-position: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  ${respondTo('laptop')} {
    position: relative;
    z-index: auto;
  }
`;

export const RightBox = styled.div`
  width: 100%;

  ${respondTo('tabletMore')} {
    width: 500px;
  }
  ${respondTo('laptop')} {
    width: 660px;
    padding: 0 80px;
  }
`;

//
export const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  height: 100%;
  overflow: hidden; // 필요한 경우 추가
`;

export const ImgBox1 = styled.div`
  background-image: url('/images/Frame1455.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: calc((100% - 80px) / 3);
  height: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

export const ImgBox2 = styled.div`
  background-image: url('/images/Frame1456.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: calc((100% - 80px) / 3);
  height: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

export const ImgBox3 = styled.div`
  background-image: url('/images/Frame1457.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: calc((100% - 80px) / 3);
  height: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;
