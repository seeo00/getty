import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  ${respondTo('laptop')} {
    display: grid;
    grid-template-columns: 1fr 580px;
    gap: 40px;
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
    /* background-color: skyblue; */
    background: rgba(0, 0, 0, 0.5);
  }

  ${respondTo('laptop')} {
    position: relative;
    z-index: auto;
  }
`;

export const RightBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */

  ${respondTo('tabletMore')} {
    width: 500px;
  }
  ${respondTo('laptop')} {
    width: 580px;
    padding: 0 40px;
  }
`;
