import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

export const GenreWrap = styled.div`
  margin-bottom: 28px;
  .inner {
    padding: 0;
    ${respondTo('desktop')} {
      padding: inherit;
    }
  }
`;

export const SubContainer = styled.div`
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
