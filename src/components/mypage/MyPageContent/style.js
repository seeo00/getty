import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #121212;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 74px 0 55px 0;
`;

export const TitleSection = styled.div`
  margin-bottom: 32px;
`;

export const MainTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

export const SubTitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
  font-size: 24px;
`;

export const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ActionButton = styled.button`
  margin: 40px auto 0;
  display: block;
  padding: 16px 24px 16px 24px;
  width: 510px;
  height: 60px;
  background-color: #0040ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1565c0;
  }
`;
