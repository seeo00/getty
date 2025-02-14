import { EmailInput } from '../EmailInput';
import * as S from '../style';
import { Button } from '../../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/modules/slices/authSlice';
import { useEffect } from 'react';
import ErrorAlert from '../../../ui/ErrorAlert';

const ResetPasswordStep = ({ goToStep, isEmailValid, setIsEmailValid }) => {
  const { isExistingEmail, errorMessage } = useSelector((state) => state.authR);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    dispatch(authActions.resetPasswordCheckEmail({ email }));
    //
  };
  useEffect(() => {
    if (isExistingEmail === true) {
      goToStep('resetComplete');
    }
  }, [isExistingEmail, goToStep]);
  return (
    <S.AuthCard>
      <S.Title>
        <p>비밀번호를 재설정할 이메일을 입력해주세요.</p>
      </S.Title>
      <S.Form onSubmit={onSubmit}>
        <EmailInput name="email" setIsEmailValid={setIsEmailValid} />
        {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}
        <Button type="submit" disabled={!isEmailValid}>
          이메일 전송
        </Button>
      </S.Form>
      <S.TextBtnBox>
        <button
          onClick={() => {
            dispatch(authActions.resetAuthState());
            goToStep('email');
          }}
          style={{ textDecoration: 'underline' }}
        >
          로그인으로 돌아가기
        </button>
      </S.TextBtnBox>
    </S.AuthCard>
  );
};

export default ResetPasswordStep;
