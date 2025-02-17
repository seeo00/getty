import styled from 'styled-components';
import { color } from '../../styled/common';

export const PageWrapper = styled.div`
  background-color: ${color.gray[900]};
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden; // 가로 스크롤 방지
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 74px 0 55px 0;

  @media (min-width: 1280px) {
    // 데스크탑
    max-width: 1280px;
  }

  @media (min-width: 744px) and (max-width: 1279px) {
    // 태블릿
    max-width: 744px;
  }

  @media (max-width: 743px) {
    // 모바일
    max-width: 390px;
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
  color: ${color.white}B3;
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

export const NotesContainer = styled.div`
  margin-top: 40px;
`;

export const NoteText = styled.div`
  color: ${color.white}80;
  font-size: 0.8313rem;
  line-height: 1.5;

  & + & {
    margin-top: 0.625rem;
  }

  @media (max-width: 1279px) {
    // 태블릿 & 모바일
    font-size: 0.75rem;
    & + & {
      margin-top: 0.75rem;
    }
  }
`;
export const PlanTitle = styled.h2`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 29px 190px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${(props) =>
    props.isSelected
      ? 'radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%)'
      : color.gray[500]};
  border-radius: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  @media (min-width: 1280px) {
    // 데스크탑
    width: 400px;
    height: 748px;
    padding: 10px;
    margin: 0;
    background-color: #3d3d3d;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .mobile-only {
      display: none;
    }

    &:hover ${PlanTitle} {
      background: radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%);
    }
  }

  @media (max-width: 1279px) {
    // 태블릿 & 모바일
    width: 100%;
    height: 6rem;
    background: none;
    padding: 0;
    box-sizing: border-box;

    .desktop-only {
      display: none;
    }
  }
`;

export const PlanButton = styled.button`
  flex: 1;
  width: 100%;
  height: 6rem;
  padding: 0;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${(props) =>
    props.isSelected
      ? 'radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%)'
      : '#494949'};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  backdrop-filter: blur(10px);
  z-index: 50;
`;

export const ModalContainer = styled.div`
  width: 43.5rem;
  height: 46.4375rem;
  background-color: #494949;
  border-radius: 1rem;
  color: white;

  @media (min-width: 745px) and (max-width: 1279px) {
    width: 25rem;
    height: 28rem;
  }

  @media (max-width: 744px) {
    width: 18rem;
    height: 22rem;
    min-height: 22rem;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 7.5rem auto 3.75rem;

  @media (min-width: 745px) and (max-width: 1279px) {
    margin: 4.3rem auto 2rem;
    font-size: 0.8rem;
  }

  @media (max-width: 744px) {
    margin: 3.3rem auto 1.5rem;
    font-size: 0.5rem;
  }
`;

export const SubscriptionCard = styled.div`
  position: relative;
  display: flex;
  background: transparent;
`;

export const SubscriptionCardLeft = styled.div`
  flex: 3;
  background-color: rgba(44, 44, 44, 0.5);
  width: 26.375rem;
  height: 13.375rem;
  border-radius: 1rem;
  margin-left: 5.3125rem;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;

  @media (min-width: 745px) and (max-width: 1279px) {
    width: 272px;
    height: 128px;
    margin-left: 56px;
    padding: 8px;
  }

  @media (max-width: 744px) {
    width: 224px;
    height: 112px;
    margin-left: 24px;
    padding: 40px 6px 40px 40px;
  }
`;

export const SubscriptionCardRight = styled.div`
  flex: 1;
  background-color: rgba(44, 44, 44, 0.5);
  width: 103px;
  border-radius: 16px;
  margin-right: 86px;
  padding: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  left: -1px;

  @media (min-width: 745px) and (max-width: 1279px) {
    width: 64px;
    margin-right: 56px;
    padding: 8px;
  }

  @media (max-width: 744px) {
    width: 48px;
    margin-right: 24px;
  }
`;

export const SubscriptionCardTitle = styled.div`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 400;

  @media (min-width: 745px) and (max-width: 1279px) {
    font-size: 20px;
    margin-top: 8px;
    margin-left: 10px;
  }

  @media (max-width: 744px) {
    font-size: 16px;
    margin-top: -25px;
    margin-left: -23px;
  }
`;

export const SubscriptionRow = styled.div`
  display: flex;
  justify-content: flex-start; // 왼쪽 정렬
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #9ca3af;

  span:first-child {
    margin-right: 78px;
    min-width: 96px;
  }

  span:last-child {
    white-space: nowrap; // 텍스트 줄바꿈 방지
    overflow: hidden; // 넘치는 텍스트 숨김
  }

  @media (min-width: 745px) and (max-width: 1279px) {
    font-size: 10px;
    margin-bottom: 4.8px;
    margin-left: 10px;

    span:first-child {
      margin-right: -16px;
    }
  }

  @media (max-width: 744px) {
    font-size: 9px;
    margin-left: -23px;
    margin-top: -4px;

    span:first-child {
      margin-right: -40px;
    }
  }
`;

export const PaymentButton = styled.button`
  width: 32.8125rem;
  height: 3.75rem;
  background-color: ${color.primary[300]};
  color: white;
  padding: 1rem 0;
  margin-top: 5rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);

  @media (min-width: 745px) and (max-width: 1279px) {
    width: 18rem;
    height: 2.6rem;
    margin-top: 3rem;
    font-size: 0.8rem;
  }

  @media (max-width: 744px) {
    width: 15rem;
    height: 1.6rem;
    margin-top: 2.1rem;
    font-size: 0.6rem;
  }

  &:hover {
    background-color: #2563eb;
  }
`;

export const AutoMoveText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
  margin-top: 2.5rem;

  @media (min-width: 745px) and (max-width: 1279px) {
    margin-top: 1.5rem;
    font-size: 0.48rem;
  }

  @media (max-width: 744px) {
    margin-top: 1rem;
    font-size: 0.35rem;
  }
`;

export const RowContainer = styled.div`
  // 데스크탑 스타일 유지
  @media (min-width: 1280px) {
    padding: 10px 0 7px 0;
    position: relative; /* 가상 요소 배치를 위해 필요 */

    &::after {
      content: '';
      display: block;
      width: 330px;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.1);
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  // 모바일/태블릿 스타일
  @media (max-width: 1279px) {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.875rem 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }
`;

export const RowContent = styled.div`
  // 데스크탑 스타일 유지
  @media (min-width: 1280px) {
    display: flex;
    margin-left: 2.4375rem;
    flex-direction: column;
    gap: 4px;
  }

  // 모바일/태블릿 스타일
  @media (max-width: 1279px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;

  @media (max-width: 1279px) {
    &:last-child {
      text-align: right;
    }
    font-size: 0.875rem;
  }
`;

export const ExtraInfo = styled.div`
  // 데스크탑 스타일 유지
  @media (min-width: 1280px) {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 4px;
    margin-left: 2.4375rem;
    line-height: 1.4;
  }

  // 모바일/태블릿 스타일
  @media (max-width: 1279px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.4;
    text-align: right;
  }
`;
