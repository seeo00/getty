import styled from 'styled-components';
import { color } from '../../styled/common';

const StyledCircleButton = styled.button`
  position: relative;
  width: ${(props) => props.$size || '56px'};
  height: ${(props) => props.$size || '56px'};
  border: ${(props) => (props.$border ? `2px solid ${color.gray[40]}` : 'none')};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor || 'transparent'};
  color: ${color.gray[40]};
  cursor: pointer;
  .icon-txt {
    font-size: 0.75rem;
  }
`;

const CircleButton = ({ children, onClick, bgColor, size = '56px', border }) => {
  return (
    <StyledCircleButton onClick={onClick} $size={size} $bgColor={bgColor} $border={border}>
      {children}
    </StyledCircleButton>
  );
};

export default CircleButton;
