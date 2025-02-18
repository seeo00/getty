import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

const StyledInnerContainer = styled.div`
  max-width: ${({ $maxWidth }) => $maxWidth || '1460px'};
  width: 100%;
  height: 100%;
  padding: 0 16px;
  margin: 0 auto;
  overflow-y: auto;

  ${respondTo('desktop')} {
    padding: 0 40px;
  }

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const InnerContainer = ({ children, className, maxWidth }) => {
  return (
    <StyledInnerContainer className={className} $maxWidth={maxWidth}>
      {children}
    </StyledInnerContainer>
  );
};
