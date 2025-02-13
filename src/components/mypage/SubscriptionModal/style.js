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
  background-color: rgba(0, 0, 0, 0.5);
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
    width: 17rem;
    height: 8rem;
    margin-left: 3.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 744px) {
    width: 14rem;
    height: 7rem;
    margin-left: 1.5rem;
  }
`;

export const SubscriptionCardRight = styled.div`
  flex: 1;
  background-color: rgba(44, 44, 44, 0.5);
  width: 6.4375rem;
  border-radius: 1rem;
  margin-right: 5.375rem;
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  left: -1px;

  @media (min-width: 745px) and (max-width: 1279px) {
    width: 4rem;
    margin-right: 3.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 744px) {
    width: 3rem;
    margin-right: 1.5rem;
  }
`;

export const SubscriptionCardTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (min-width: 745px) and (max-width: 1279px) {
    font-size: 0.9rem;
  }

  @media (max-width: 744px) {
    font-size: 0.8rem;
  }
`;

export const SubscriptionRow = styled.div`
  display: flex;
  justify-content: flex-start; // 왼쪽 정렬
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #9ca3af;

  span:first-child {
    margin-right: 4.875rem; // 78px를 rem으로 변환 (1rem = 16px)
    min-width: 6rem; // 첫 번째 span의 최소 너비 지정
  }

  span:last-child {
    white-space: nowrap; // 텍스트 줄바꿈 방지
    overflow: hidden; // 넘치는 텍스트 숨김
  }

  @media (min-width: 745px) and (max-width: 1279px) {
    font-size: 0.47rem;
    margin-bottom: 0.3rem;

    span:first-child {
      margin-right: 3rem;
    }
  }

  @media (max-width: 744px) {
    font-size: 0.35rem;

    span:first-child {
      margin-right: 2rem;
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
