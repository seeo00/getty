import InputField from '../../ui/InputField';
import { emailRegex } from '../../utils/regexUtils';

export const EmailInput = ({ setIsEmailValid, name, enteredEmail, ...props }) => {
  const validateEmail = (value) => {
    if (!value) return '필수 정보입니다.';
    if (!emailRegex.test(value)) {
      return '올바른 이메일 주소를 입력해주세요.';
    }
    return '';
  };

  return (
    <InputField
      label="이메일"
      type="email"
      name={name}
      enteredEmail={enteredEmail}
      getErrorMessage={validateEmail}
      setIsEmailValid={setIsEmailValid}
      {...props}
    />
  );
};
