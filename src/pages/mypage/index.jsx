import { InnerContainer } from '../../common/layout/InnerContainer';
import { ProfileInfo } from '../../components';
import MypageContent from '../../components/mypage/MypageContent';
import * as S from './style';

const MyPage = () => {
  return (
    <S.MypageContainer>
      <InnerContainer>
        <ProfileInfo />
        <MypageContent />
      </InnerContainer>
    </S.MypageContainer>
  );
};

export default MyPage;
