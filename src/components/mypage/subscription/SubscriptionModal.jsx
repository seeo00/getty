import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { planDetails } from '../../../assets/api/planData.js';
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  SubscriptionCard,
  SubscriptionCardLeft,
  SubscriptionCardRight,
  SubscriptionCardTitle,
  SubscriptionRow,
  AutoMoveText,
  ButtonWrapper,
} from '../style.js';
import Button from '../../../ui/Button.jsx';

const SubscriptionModal = ({ onClose, selectedPlan = 'Basic' }) => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  const plan = planDetails[selectedPlan];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCountdown((prevCount) => {
  //       if (prevCount <= 1) {
  //         clearInterval(timer);
  //         onClose();
  //         return 0;
  //       }
  //       return prevCount - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [onClose]);

  const handlePaymentClick = () => {
    navigate('/');
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>이용권 구독을 시작합니다!</ModalTitle>

        <SubscriptionCard>
          <SubscriptionCardLeft>
            <SubscriptionCardTitle>{plan.title}</SubscriptionCardTitle>
            <SubscriptionRow>
              <span>구독기간</span>
              <span>{plan.period}</span>
            </SubscriptionRow>
            <SubscriptionRow>
              <span>결제금액</span>
              <span>{plan.price}원</span>
            </SubscriptionRow>
            <SubscriptionRow>
              <span>다음결제일</span>
              <span>{plan.nextPaymentDate}</span>
            </SubscriptionRow>
          </SubscriptionCardLeft>
          <SubscriptionCardRight/>
        </SubscriptionCard>

        <ButtonWrapper>
          <Button onClick={handlePaymentClick}>감상하러 가기</Button>
        </ButtonWrapper>

        <AutoMoveText>{countdown}초 후에 자동으로 닫혀요</AutoMoveText>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SubscriptionModal;
