import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

export const MoreContainer = styled.div`
  margin-bottom: 28px;
`;

export const MorePageHeader = styled.div`
  padding: 16px 0 26px;
  h2 {
    font-size: 1.125rem;
  }

  ${respondTo('tabletMore')} {
    padding: 16px 0 40px;
  }

  ${respondTo('desktop')} {
    h2 {
      font-size: 1.5rem;
      letter-spacing: -0.28px;
    }
  }
`;
