import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

export const StyledInnerContainer = styled.div`
  max-width: ${({ $maxWidth }) => $maxWidth || '1480px'};
  width: 100%;
  height: 100%;
  padding: 0 16px;
  margin: 0 auto;
  overflow-y: auto;

  ${respondTo('desktop')} {
    padding: 0 40px;
  }
`;

export const InnerContainer = ({ children, maxWidth }) => {
  return <StyledInnerContainer $maxWidth={maxWidth}>{children}</StyledInnerContainer>;
};
