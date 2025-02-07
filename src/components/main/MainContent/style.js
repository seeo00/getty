import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 168rem;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: ${color.gray[900]};

  ${respondTo('desktop')} {
    max-width: 100%;
    padding: 0 2rem;
  }

  ${respondTo('tablet')} {
    padding: 0 1.5rem;
  }

  ${respondTo('mobile')} {
    padding: 0 1rem;
  }
`;

export const MainContentSection = styled.div`
  margin-top: 2rem;

  ${respondTo('mobile')} {
    margin-top: 1rem;
  }
`;
