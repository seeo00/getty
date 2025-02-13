import * as S from '../style';
import { EmailInput } from '../EmailInput';
import { PasswordInput } from '../PasswordInput';
import CheckBox from '../../../ui/Checkbox';
import { useState } from 'react';
import { Button } from '../../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/modules/slices/authSlice';

const checkboxList = [
  { id: 1, name: 'chk1', label: '(필수) 만 14세 이상입니다.', isChecked: false },
  { id: 2, name: 'chk2', label: '(필수) 서비스 이용약관', isChecked: false },
  { id: 3, name: 'chk3', label: '(필수) 개인정보 수집이용 동의', isChecked: false },
  { id: 4, name: 'chk4', label: '(필수) 유료상품 이용약관', isChecked: false },
];

const SignupStep = ({ goToStep, isEmailValid, setIsEmailValid, isPasswordValid, setIsPasswordValid }) => {
  const { enteredEmail } = useSelector((state) => state.authR);
  const [chkData, setchkData] = useState(checkboxList);
  const dispatch = useDispatch();

  const inputChange = (e) => {
    const { checked, name } = e.target;
    if (name === 'all') {
      setchkData(chkData.map((item) => ({ ...item, isChecked: checked })));
    } else {
      setchkData(chkData.map((item) => (item.name === name ? { ...item, isChecked: checked } : item)));
    }
  };

  const isAllChk = chkData.every((item) => item.isChecked);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(authActions.signup({ email, password }));
    goToStep('signupComplete');
  };

  return (
    <S.AuthCard>
      <S.Title>
        <p>계정을 생성합니다.</p>
        <p>가입 후 다양한 서비스를 이용해보세요!</p>
      </S.Title>
      <S.Form onSubmit={onSubmit}>
        <div>
          <EmailInput name="email" enteredEmail={enteredEmail} setIsEmailValid={setIsEmailValid} />
          <PasswordInput name="password" setIsPasswordValid={setIsPasswordValid} mode="signup" />
          <S.CheckboxList>
            <CheckBox name="all" label="전체 약관에 동의합니다." checked={isAllChk} onChange={inputChange} />
            {chkData.map((item) => {
              const [highlightText, mainText] = item.label.split(') ');
              return (
                <CheckBox
                  showIcon
                  key={item.id}
                  name={item.name}
                  checked={item.isChecked}
                  onChange={inputChange}
                  label={
                    <>
                      <S.Highlight>{highlightText})</S.Highlight> {mainText}
                    </>
                  }
                />
              );
            })}
          </S.CheckboxList>
        </div>
        <Button type="submit" disabled={!isEmailValid || !isPasswordValid || !isAllChk}>
          회원가입
        </Button>
      </S.Form>
    </S.AuthCard>
  );
};

export default SignupStep;
