import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

export const TopSection = styled.div`
  margin-bottom: 1.25rem;

  ${respondTo('mobile')} {
    margin-bottom: 1rem;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: ${color.white};
  font-size: 1rem;
`;

export const TopItem = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  background: ${color.gray[700]};
  border-radius: 1rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

export const TopNumber = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: ${color.white};
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 10;
`;
