import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // next/router 대신 react-router-dom 사용
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  SubscriptionCard,
  SubscriptionCardTitle,
  SubscriptionRow,
  PaymentButton,
  AutoMoveText,
  SubscriptionCardLeft,
  SubscriptionCardRight,
} from './style';

const SubscriptionModal = ({ onClose }) => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate(); // useRouter 대신 useNavigate 사용

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  const handlePaymentClick = () => {
    navigate('/'); // router.push 대신 navigate 사용
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>이용권 구독을 시작합니다!</ModalTitle>

        <SubscriptionCard>
          <SubscriptionCardLeft>
            <SubscriptionCardTitle>Basic</SubscriptionCardTitle>
            <SubscriptionRow>
              <span>구독기간</span>
              <span>2024.01.01 ~ 2024.02.01</span>
            </SubscriptionRow>
            <SubscriptionRow>
              <span>결제금액</span>
              <span>5,500원</span>
            </SubscriptionRow>
            <SubscriptionRow>
              <span>다음결제일</span>
              <span>2024.02.02</span>
            </SubscriptionRow>
          </SubscriptionCardLeft>

          <SubscriptionCardRight></SubscriptionCardRight>
        </SubscriptionCard>

        <PaymentButton onClick={handlePaymentClick}>감상하러 가기</PaymentButton>

        <AutoMoveText>{countdown}초 후에 자동으로 닫혀요</AutoMoveText>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SubscriptionModal;
