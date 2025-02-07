import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

export const GridContentBlock = styled.div`
  margin-bottom: 1.25rem;

  ${respondTo('mobile')} {
    margin-bottom: 1rem;
  }
`;

export const GridContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: ${color.white};
  font-size: 1rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  ${respondTo('tablet')} {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
  }

  ${respondTo('mobile')} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  background: ${color.gray[700]};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
`;

export const NumberLabel = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: ${color.white};
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
`;
