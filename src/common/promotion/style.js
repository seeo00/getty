import styled from 'styled-components';
import { color } from '../../styled/common';
import { respondTo } from '../../styled/GlobalStyle';

export const BannerContainer = styled.div`
  width: 100%;
  background-color: ${color.primary[300]};
  position: fixed;
  right: 0;
  left: 0;
  bottom: 64px;
  z-index: 900;
  cursor: pointer;
  /* border-top-left-radius: 8px;
  border-top-right-radius: 8px; */
  padding: 16px 0;
  margin-bottom: -1px;
  ${respondTo('tabletMore')} {
    bottom: 0;
  }
  ${respondTo('desktop')} {
    z-index: 2200;
    transform: translateY(-1px);
  }
`;

export const FlexContainer = styled.div`
  > button {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  ${respondTo('tabletMore')} {
    > button {
      font-size: 0.875rem;
      display: block;
    }
  }
  ${respondTo('desktop')} {
    > button {
      font-size: 1rem;
    }
  }
`;

export const Title = styled.strong`
  font-size: 0.875rem;
  letter-spacing: -0.14px;
  font-weight: 500;
  ${respondTo('desktop')} {
    font-size: 1.25rem;
  }
`;

export const Desc = styled.p`
  font-size: 0.75rem;
  margin-top: 8px;
  ${respondTo('desktop')} {
    font-size: 1rem;
  }
`;
