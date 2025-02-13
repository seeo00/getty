import { Button } from '../../../ui/Button';
import * as S from '../style';

const ResetCompleteStep = ({ goToStep }) => {
  return (
    <S.AuthCard>
      <S.Title>
        <p>비밀번호 재설정 이메일을 발송했습니다.</p>
        <p>이메일의 링크를 통해 비밀번호를 재설정해주세요.</p>
        <S.TitleP $mt="40px">이메일이 도착하지 않았다면,</S.TitleP>
        <p>스팸 폴더를 확인하시거나 다시 시도해주세요.</p>
      </S.Title>
      <S.BottomBox>
        <Button
          onClick={() => {
            goToStep('email');
          }}
        >
          로그인으로 돌아가기
        </Button>
      </S.BottomBox>
    </S.AuthCard>
  );
};

export default ResetCompleteStep;
