import { CardContainer, PlanTitle, PlanButton } from '../style';
import SubscriptionRow from './SubscriptionRow';
import { planDetails } from '../../../assets/api/planData'; // planDetails import 추가

const PlanCard = ({ title, selectedPlan, onSelectPlan }) => {
  const isSelected = selectedPlan === title;
  const planData = planDetails[title]; // planDetails 데이터 가져오기

  const handleClick = () => {
    onSelectPlan(title);
  };

  return (
    <CardContainer onClick={handleClick}>
      {/* 데스크탑 버전 */}
      <div className="desktop-only">
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
          {title}
        </PlanButton>
      </div>
    </CardContainer>
  );
};

export default PlanCard;
