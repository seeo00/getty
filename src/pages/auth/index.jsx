import * as S from './style';
import { InnerContainer } from '../../common/layout/InnerContainer';
import EmailStep from '../../components/auth/steps/EmailStep';

const Auth = () => {
  return (
    <>
      <InnerContainer maxWidth="1920px">
        <S.GridContainer>
          <S.LeftBox>이미지영역</S.LeftBox>
          <S.RightBox>
            <EmailStep />
          </S.RightBox>
        </S.GridContainer>
      </InnerContainer>
    </>
  );
};

export default Auth;
