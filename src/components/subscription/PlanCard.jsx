import { CardContainer, PlanTitle, PlanButton } from './style';
import SubscriptionRow from './SubscriptionRow';
import { planDetails } from '../../assets/api/planData'; // planDetails import 추가
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledIsSubscribed = styled.span`
  display: block;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.625rem;
  color: #aaa;
  border: 1px solid #aaa;
  padding: 2px 8px;
  border-radius: 20px;
  z-index: 1;
`;

const PlanCard = ({ title, selectedPlan, onSelectPlan }) => {
  const { user } = useSelector((state) => state.authR);
  const isSubscribed = user.subscriptionPlan === title;
  const isSelected = selectedPlan === title;
  const planData = planDetails[title]; // planDetails 데이터 가져오기

  const handleClick = () => {
    onSelectPlan(title);
  };

  return (
    <CardContainer onClick={handleClick}>
      {/* 데스크탑 버전 */}
      <div className="desktop-only" style={{ position: 'relative' }}>
        {isSubscribed && <StyledIsSubscribed>이용중</StyledIsSubscribed>}
        <PlanTitle isSelected={isSelected}>{title}</PlanTitle>
        <div style={{ marginTop: '50px' }}>
          {planData.details.map((detail, index) => (
            <SubscriptionRow key={index} label={detail.label} price={detail.value} extra={detail.extra} />
          ))}
        </div>
      </div>

      {/* 모바일/태블릿 버전 */}
      <div className="mobile-only">
        <PlanButton isSelected={isSelected} onClick={handleClick}>
          {isSubscribed && <StyledIsSubscribed>이용중</StyledIsSubscribed>}
          {title}
        </PlanButton>
      </div>
    </CardContainer>
  );
};

export default PlanCard;
