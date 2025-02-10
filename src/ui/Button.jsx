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
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 500;

  ${(props) => (props.disabled ? disabledStyles : activeStyles)}
`;
