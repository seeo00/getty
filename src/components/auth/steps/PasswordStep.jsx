import { Button } from '../../../ui/Button';
import { EmailInput } from '../EmailInput';
import { PasswordInput } from '../PasswordInput';
import * as S from '../style';
import CheckBox from '../../../ui/Checkbox';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/modules/slices/authSlice';
import ErrorAlert from '../../../ui/ErrorAlert';
import { useEffect, useState } from 'react';

const PasswordStep = ({ goToStep, isPasswordValid, setIsPasswordValid }) => {
  const { authed, enteredEmail, errorMessage } = useSelector((state) => state.authR);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keepLogin, setKeepLogin] = useState(true);
  const onInputChange = (e) => {
    setKeepLogin(e.target.checked);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    dispatch(authActions.login({ password, keepLogin }));
  };

  useEffect(() => {
    if (authed) {
      navigate('/');
    }
  }, [authed, navigate]);

  return (
    <S.AuthCard>
      <S.Title>
        <p>비밀번호를 입력해주세요.</p>
      </S.Title>

      <S.Form onSubmit={onSubmit}>
        <div>
          <EmailInput enteredEmail={enteredEmail} disabled />
          <PasswordInput name="password" setIsPasswordValid={setIsPasswordValid} />
          <CheckBox label="로그인 상태 유지" checked={keepLogin} onChange={onInputChange} />
        </div>
        {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}
        <Button type="submit" disabled={!isPasswordValid}>
          로그인
        </Button>
      </S.Form>
      <S.TextBtnBox>
        <button
          onClick={() => {
            dispatch(authActions.resetAuthState());
            goToStep('resetPassword');
          }}
        >
          비밀번호 재설정
        </button>
        <span>|</span>
        <button
          onClick={() => {
            dispatch(authActions.resetAuthState());
            goToStep('email');
          }}
        >
          다른계정으로 로그인
        </button>
      </S.TextBtnBox>
    </S.AuthCard>
  );
};

export default PasswordStep;
