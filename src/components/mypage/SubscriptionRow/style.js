// SubscriptionRow/style.js
import styled from 'styled-components';

export const RowContainer = styled.div`
  // 데스크탑 스타일 유지
  @media (min-width: 1280px) {
    padding: 10px 0 7px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  // 모바일/태블릿 스타일
  @media (max-width: 1279px) {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.875rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const RowContent = styled.div`
  // 데스크탑 스타일 유지
  @media (min-width: 1280px) {
    display: flex;
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
