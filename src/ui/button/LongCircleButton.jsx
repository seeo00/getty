// ui/LongCircleButton.jsx
import React from 'react';
import styled from 'styled-components';
import { color } from '../../styled/common';

const StyledLongCircleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  min-width: 76px;
  height: 36px;
  border: 1px solid ${color.gray[70]};
  border-radius: 16px;
  background-color: ${(props) => props.$bgColor || 'transparent'};
  cursor: pointer;

  & > svg {
    width: 20px;
    height: 20px;
    color: ${color.gray[70]};
  }

  .icon-txt {
    font-size: 14px;
    line-height: 20px;
    color: ${color.gray[70]};
    margin-left: 4px;
  }
`;

const LongCircleButton = ({ children, onClick, bgColor, count, showCount = false }) => {
  return (
    <StyledLongCircleButton onClick={onClick} $bgColor={bgColor}>
      {children}
      {showCount && typeof count === 'number' && <span className="icon-txt">{count}</span>}
    </StyledLongCircleButton>
  );
};

export default LongCircleButton;
