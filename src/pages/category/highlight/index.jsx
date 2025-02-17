import { InnerContainer } from '../../../common/layout/InnerContainer';
import SubBannerSwiper from '../../../components/category/SubBannerSwiper';
import { SectionArea } from './style';

const Highlight = () => {
  return (
    <div>
      <SubBannerSwiper rank />
      <SectionArea>
        <InnerContainer maxWidth="1460px" className="inner">
          카드섹션자리
        </InnerContainer>
      </SectionArea>
    </div>
  );
};

export default Highlight;
