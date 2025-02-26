import { CardContainer, PlanTitle, PlanButton } from './style';
import SubscriptionRow from './SubscriptionRow';
import { planDetails } from '../../assets/api/planData'; // planDetails import 추가
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

const StyledIsSubscribed = styled.span`
  display: block;
  position: absolute;
  top: 8px;
  right: 12px;
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
        {isSubscribed && (
          <StyledIsSubscribed>
            <FaCheckCircle />
          </StyledIsSubscribed>
        )}
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
          {isSubscribed && (
            <StyledIsSubscribed>
              <FaCheckCircle size={16} />
            </StyledIsSubscribed>
          )}
          {title}
        </PlanButton>
      </div>
    </CardContainer>
  );
};

export default PlanCard;
