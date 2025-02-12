import { Button } from '../../../ui/Button';
import { EmailInput } from '../EmailInput';
import * as S from '../style';
import CircleButton from '../../../ui/CircleButton';
import { FaGrinHearts } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/modules/slices/authSlice';
import { useEffect } from 'react';

const EmailStep = ({ goToStep, isEmailValid, setIsEmailValid }) => {
  // const [email, setEmail] = useState('');
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
        <CircleButton icon={FaGrinHearts} />
        <CircleButton />
        <CircleButton />
      </S.SocialBtnBox>
    </S.AuthCard>
  );
};
export default EmailStep;
