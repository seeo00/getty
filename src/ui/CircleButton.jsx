import styled from 'styled-components';
import { color } from '../styled/common';

const StyledCircleButton = styled.button`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
  border: none;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    fill: ${color.black};
  }
`;

const CircleButton = ({ icon: Icon, onClick }) => {
  return <StyledCircleButton onClick={onClick}>{Icon && <Icon />}</StyledCircleButton>;
};

export default CircleButton;
