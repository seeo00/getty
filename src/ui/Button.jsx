import styled, { css } from 'styled-components';
import { color } from '../styled/common';

const disabledStyles = css`
  background-color: transparent;
  color: ${color.gray[70]};
  border: 2px solid ${color.gray[70]};
  cursor: default;
`;

const activeStyles = css`
  background-color: ${color.primary[300]};
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(0, 64, 255, 0.8);
  }
`;

export const Button = styled.button`
  width: ${(props) => props.width || '100%'};
  /* height: ${(props) => props.height || '56px'}; */
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;

  ${(props) => (props.disabled ? disabledStyles : activeStyles)}
`;

export default Button;
