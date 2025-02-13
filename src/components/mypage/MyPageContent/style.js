import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #121212;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden; // 가로 스크롤 방지
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 74px 0 55px 0;
  box-sizing: border-box;

  @media (min-width: 1280px) {
    // 데스크탑
    max-width: 1280px;
  }

  @media (min-width: 744px) and (max-width: 1279px) {
    // 태블릿
    max-width: 744px;
    padding: 74px 20px 55px 20px;
  }

  @media (max-width: 743px) {
    // 모바일
    max-width: 390px;
    padding: 74px 20px 55px 20px;
  }
`;

export const TitleSection = styled.div`
  margin-bottom: 32px;
`;

export const MainTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 20px 0;

  @media (max-width: 1279px) {
    font-size: 24px;
    text-align: left;
    padding: 0 20px;
  }
`;

export const SubTitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
  font-size: 24px;

  @media (max-width: 1279px) {
    font-size: 18px;
    text-align: left;
    padding: 0 20px;
  }
`;

export const PlansGrid = styled.div`
  @media (min-width: 1280px) {
    // 데스크탑
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (max-width: 1279px) {
    // 태블릿 & 모바일
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; // center로 변경
    align-items: center; // center 추가
    gap: 10px;
    padding: 0;
    width: 100%;
  }
`;
export const ButtonContainer = styled.div`
  @media (min-width: 1280px) {
    // 데스크탑
    display: contents;
  }

  @media (max-width: 1279px) {
    // 태블릿 & 모바일
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    padding: 0 20px;
  }
`;

export const MobileContentWrapper = styled.div`
  display: none;

  @media (max-width: 1279px) {
    display: block;
    width: calc(100% - 40px);
    margin: 20px auto 0;
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

  @media (max-width: 899px) {
    width: 90%;
    max-width: 400px;
    height: 48px;
    font-size: 18px;
    margin: 24px auto 0;
  }
`;
