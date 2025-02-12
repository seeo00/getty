import { CardContainer, PlanTitle, PlanButton } from './style';
import SubscriptionRow from '../SubscriptionRow/SubscriptionRow';

const PlanCard = ({ title, selectedPlan, onSelectPlan }) => {
  const isSelected = selectedPlan === title;

  const handleClick = () => {
    onSelectPlan(title);
  };

  return (
    <CardContainer onClick={handleClick}>
      {/* 데스크탑 버전 */}
      <div className="desktop-only">
        <PlanTitle isSelected={isSelected}>{title}</PlanTitle>
        <div style={{ marginTop: '50px' }}>
          <SubscriptionRow label="월 요금" price="5,500" />
          <SubscriptionRow label="월 요금" price="5,500" />
          <SubscriptionRow label="월 요금" price="5,500" />
          <SubscriptionRow label="월 요금" price="5,500" />
          <SubscriptionRow label="월 요금" extra="TV, 컴퓨터, 스마트폰, 태블릿" />
          <SubscriptionRow label="월 요금" price="5,500" />
          <SubscriptionRow label="월 요금" price="5,500" />
        </div>
      </div>

      {/* 모바일/태블릿 버전 */}
      <div className="mobile-only">
        <PlanButton isSelected={isSelected} onClick={handleClick}>
          {title}
        </PlanButton>
      </div>
    </CardContainer>
  );
};

export default PlanCard;
