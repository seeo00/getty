import styled from 'styled-components';

export const ContentBlock = styled.div`
  margin-bottom: 1.25rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: #e5e5e5;
  font-size: 1.5rem;
`;

export const MediaCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const MediaCard = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #222;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayIconWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
