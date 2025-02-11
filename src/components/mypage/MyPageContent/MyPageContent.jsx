import { useState } from 'react';
import PlanCard from '../PlanCard/PlanCard';
import InfoNotes from '../InfoNotes/InfoNotes';
import SubscriptionRow from '../SubscriptionRow/SubscriptionRow';
import { 
  PageWrapper, 
  ContentWrapper, 
  TitleSection, 
  MainTitle, 
  SubTitle, 
  PlansGrid, 
  ActionButton, 
  MobileContentWrapper 
} from './style';

const MyPageContent = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <TitleSection>
          <MainTitle>콘텐츠를 즐길 준비가 되셨나요?</MainTitle>
          <SubTitle>원하는 이용권을 선택해 주세요. 이용권은 언제든지 원하실 때 해지할 수 있습니다.</SubTitle>
        </TitleSection>
        
        <PlansGrid>
          <PlanCard title="Basic" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
          <PlanCard title="Standard" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
          <PlanCard title="Premium" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
          
          {selectedPlan && (
            <MobileContentWrapper>
              <SubscriptionRow label="월 요금" price="5,500" />
              <SubscriptionRow label="월 요금" price="5,500" />
              <SubscriptionRow label="월 요금" price="5,500" />
              <SubscriptionRow label="월 요금" price="5,500" />
              <SubscriptionRow label="월 요금" extra="TV, 컴퓨터, 스마트폰, 태블릿" />
              <SubscriptionRow label="월 요금" price="5,500" />
              <SubscriptionRow label="월 요금" price="5,500" />
            </MobileContentWrapper>
          )}
        </PlansGrid>
        
        <InfoNotes />
        <ActionButton>다음</ActionButton>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MyPageContent;