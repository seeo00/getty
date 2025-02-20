import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

export const MainContainer = styled.div`
  padding: 40px 0;

  .inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  ${respondTo('desktop')} {
    padding: 90px 0;

    .inner {
      gap: 74px;
    }
  }
`;
