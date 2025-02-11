import PlanCard from '../PlanCard/PlanCard';
import InfoNotes from '../InfoNotes/InfoNotes';
import { PageWrapper, ContentWrapper, TitleSection, MainTitle, SubTitle, PlansGrid, ActionButton } from './style';

const MyPageContent = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <TitleSection>
          <MainTitle>콘텐츠를 즐길 준비가 되셨나요?</MainTitle>
          <SubTitle>원하는 이용권을 선택해 주세요. 이용권은 언제든지 원하실 때 해지할 수 있습니다.</SubTitle>
        </TitleSection>

        <PlansGrid>
          <PlanCard title="Basic" />
          <PlanCard title="Standard" />
          <PlanCard title="Premium" />
        </PlansGrid>

        <InfoNotes />

        <ActionButton>다음</ActionButton>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MyPageContent;
