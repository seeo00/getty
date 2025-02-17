import styled from 'styled-components';
import { color } from '../styled/common';
import AlertErrorIcon from './icon/AlertErrorIcon';

const StyledWrap = styled.div`
  width: fit-content;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  color: ${color.red};
  font-weight: 500;
  letter-spacing: -0.16px;
  font-size: 0.875rem;
  background: rgba(226, 32, 32, 0.3);
`;

const ErrorAlert = ({ children }) => {
  return (
    <StyledWrap>
      <AlertErrorIcon />
      {children}
    </StyledWrap>
  );
};

export default ErrorAlert;
