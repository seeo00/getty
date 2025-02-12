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
  border-radius: 16px;
  /* padding: 24px; */
  color: white;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin: 120px auto 60px;
`;

export const SubscriptionCard = styled.div`
  position: relative;
  display: flex;
  background: transparent;
`;

export const SubscriptionCardLeft = styled.div`
  flex: 3;
  background-color: rgba(44, 44, 44, 0.5);
  width: 422px;
  height: 214px;
  border-radius: 16px;
  margin-left: 85px;
  padding: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
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
`;

export const SubscriptionCardTitle = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const SubscriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: #9ca3af;
`;

export const PaymentButton = styled.button`
  width: 525px;
  height: 60px;
  background-color: #0040ff;
  color: white;
  padding: 16px 0;
  margin-top: 80px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: medium;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
  margin-left: 50%; // 이 부분 추가
  transform: translateX(-50%); // 이 부분 추가

  &:hover {
    background-color: #2563eb;
  }
`;

export const AutoMoveText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #6b7280;
  margin-top: 40px;
`;
