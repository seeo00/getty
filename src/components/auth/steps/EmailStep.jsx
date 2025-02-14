import { Button } from '../../../ui/Button';
import { EmailInput } from '../EmailInput';
import * as S from '../style';
import CircleButton from '../../../ui/CircleButton';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/modules/slices/authSlice';
import { useEffect } from 'react';
import { FaFacebookF, FaGoogle, FaXTwitter } from 'react-icons/fa6';
import { color } from '../../../styled/common';

const EmailStep = ({ goToStep, isEmailValid, setIsEmailValid }) => {
  const { isExistingEmail } = useSelector((state) => state.authR);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    dispatch(authActions.checkEmail({ email }));
  };
  useEffect(() => {
    if (isExistingEmail === true) {
      goToStep('password');
    } else if (isExistingEmail === false) {
      goToStep('signup');
    }
  }, [isExistingEmail, goToStep]);

  return (
    <S.AuthCard>
      <S.Title>
        <p>로그인하거나 계정을 생성하려면</p>
        <p>이메일을 입력해 주세요.</p>
      </S.Title>
      <S.Form onSubmit={onSubmit}>
        <EmailInput name="email" setIsEmailValid={setIsEmailValid} />
        <Button type="submit" disabled={!isEmailValid}>
          다음
        </Button>
      </S.Form>
      <S.Separator>또는</S.Separator>
      <S.SocialBtnBox>
        <CircleButton size="60px" bgColor={color.white}>
          <FaGoogle fill={color.black} size={24} />
        </CircleButton>
        <CircleButton size="60px" bgColor={color.white}>
          <FaFacebookF fill={color.black} size={24} />
        </CircleButton>
        <CircleButton size="60px" bgColor={color.white}>
          <FaXTwitter fill={color.black} size={24} />
        </CircleButton>
      </S.SocialBtnBox>
    </S.AuthCard>
  );
};

export default EmailStep;
