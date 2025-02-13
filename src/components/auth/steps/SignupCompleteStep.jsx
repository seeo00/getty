import * as S from '../style';
import { Button } from '../../../ui/Button';
import { useNavigate } from 'react-router-dom';

const SignupCompleteStep = () => {
  const navigate = useNavigate();
  return (
    <S.AuthCard>
      <S.Title>
        <p>회원가입이 완료되었습니다.</p>
        <S.TitleP $mt="40px">이용권 구독을 완료하고</S.TitleP>
        <p>더 많은 콘텐츠를 즐겨보세요.</p>
      </S.Title>
      <S.BottomBox>
        <Button>이용권 구독하기</Button>
        <S.TextBtnBox $justifyEnd>
          <button
            onClick={() => {
              navigate('/');
            }}
            style={{ textDecoration: 'underline' }}
          >
            나중에 하기
          </button>
        </S.TextBtnBox>
      </S.BottomBox>
    </S.AuthCard>
  );
};

export default SignupCompleteStep;
