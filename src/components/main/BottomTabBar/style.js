import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

export const BottomTab = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background-color: ${color.gray[800]};
  color: ${color.white};
  justify-content: space-around;
  align-items: center;
  z-index: 10;

  ${respondTo('desktop')} {
    display: none;
  }
`;
