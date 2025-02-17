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

  ${respondTo('desktop')} {
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

    background: url(https://github.com/seeo00/project-image-storage/blob/main/images/main/auth/auth.jpg?raw=true)
      no-repeat 0 0 / cover;
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

  ${respondTo('desktop')} {
    position: relative;
    z-index: auto;
  }
`;

export const RightBox = styled.div`
  width: 100%;

  ${respondTo('tabletMore')} {
    width: 500px;
  }
  ${respondTo('desktop')} {
    width: 660px;
    padding: 0 80px;
  }
`;
