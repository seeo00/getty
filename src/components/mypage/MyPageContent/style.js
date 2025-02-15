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
  box-sizing: border-box;
  // 상하 padding만 유지하고 좌우는 20px로 통일

  @media (min-width: 1280px) {
    // 데스크탑
    max-width: 1280px;
    padding: 74px 20px 55px 20px;
  }

  @media (min-width: 744px) and (max-width: 1279px) {
    // 태블릿
    max-width: 744px;
    padding: 74px 0 55px 0;
  }

  @media (max-width: 743px) {
    // 모바일
    max-width: 390px;
    padding: 74px 0 55px 0;
  }
`;

export const TitleSection = styled.div`
  margin-bottom: 32px;
`;

export const MainTitle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  margin: 0 0 1.25rem 0;

  @media (max-width: 1279px) {
    font-size: 1.25rem;
    font-weight: 300;
    text-align: left;
    margin: 1.25rem 0 0.75rem 0;
    padding: 0; // 개별 padding 제거하고 ContentWrapper의 padding 사용
  }
`;

export const SubTitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  font-size: 1.5rem;

  @media (max-width: 1279px) {
    font-size: 1rem;
    text-align: left;
    margin-bottom: 3.75rem;
    padding: 0; // 개별 padding 제거하고 ContentWrapper의 padding 사용
  }
`;

export const PlansGrid = styled.div`
  @media (min-width: 1280px) {
    // 데스크탑
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  @media (max-width: 1279px) {
    // 태블릿 & 모바일
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0; // padding 제거
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
    gap: 0.5rem;
    width: 100%;
    padding: 0; // 개별 padding 제거하고 ContentWrapper의 padding 사용
    margin-bottom: 2.375rem;
  }
`;

export const MobileContentWrapper = styled.div`
  display: none;

  @media (max-width: 1279px) {
    display: block;
    width: 100%; // calc 제거하고 100%로 변경
    margin: 20px 0 0; // 좌우 마진 제거하고 상단 마진만 유지
  }
`;

export const ActionButton = styled.button`
  margin: 40px auto 0;
  display: flex; /* Flexbox 적용 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  padding: 16px 24px;
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

  @media (max-width: 1279px) {
    width: 100%;
    height: 3.125rem;
    font-size: 1rem;
    margin: 2.5rem auto 0;
  }
`;
