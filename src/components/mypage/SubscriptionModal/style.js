import styled from 'styled-components';

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
  background-color: #0040ff;
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
