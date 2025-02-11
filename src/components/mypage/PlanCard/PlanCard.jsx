import { CardContainer, PlanTitle } from './style';
import SubscriptionRow from '../SubscriptionRow/SubscriptionRow';

const PlanCard = ({ title, isSelected = false }) => {
  return (
    <CardContainer>
      <PlanTitle>{title}</PlanTitle>
      <div style={{ marginTop: '24px' }}>
        <SubscriptionRow label="월 요금" price="5,500" />
        <SubscriptionRow label="월 요금" price="5,500" />
        <SubscriptionRow label="월 요금" price="5,500" />
        <SubscriptionRow label="월 요금" price="5,500" />
        <SubscriptionRow label="월 요금" extra="TV, 컴퓨터, 스마트폰, 태블릿" />
        <SubscriptionRow label="월 요금" price="5,500" />
        <SubscriptionRow label="월 요금" price="5,500" />
      </div>
    </CardContainer>
  );
};

export default PlanCard;
