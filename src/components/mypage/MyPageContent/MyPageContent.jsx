import { useState } from 'react';
import PlanCard from '../PlanCard/PlanCard';
import InfoNotes from '../InfoNotes/InfoNotes';
import SubscriptionRow from '../SubscriptionRow/SubscriptionRow';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';
import {
  PageWrapper,
  ContentWrapper,
  TitleSection,
  MainTitle,
  SubTitle,
  PlansGrid,
  ActionButton,
  MobileContentWrapper,
  ButtonContainer,
} from './style';
import { InnerContainer } from '../../../common/layout/InnerContainer';

const MyPageContent = () => {
  const [selectedPlan, setSelectedPlan] = useState('Basic');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan); // 단순히 새로운 플랜으로 설정, 해제 기능 없음
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <InnerContainer maxWidth="1920px">
      <PageWrapper>
        <ContentWrapper>
          <TitleSection>
            <MainTitle>콘텐츠를 즐길 준비가 되셨나요?</MainTitle>
            <SubTitle>원하는 이용권을 선택해 주세요. 이용권은 언제든지 원하실 때 해지할 수 있습니다.</SubTitle>
          </TitleSection>

          <PlansGrid>
            <ButtonContainer>
              <PlanCard title="Basic" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
              <PlanCard title="Standard" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
              <PlanCard title="Premium" selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
            </ButtonContainer>
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
          <ActionButton onClick={openModal}>다음</ActionButton>
        </ContentWrapper>
      </PageWrapper>
      {/* 모달 조건부 렌더링 */}
      {isModalOpen && <SubscriptionModal onClose={closeModal} />}
    </InnerContainer>
  );
};

export default MyPageContent;
