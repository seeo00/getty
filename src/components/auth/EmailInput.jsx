import InputField from '../../ui/InputField';

export const EmailInput = (props) => {
  const validateEmail = (value) => {
    if (!value) return '필수 정보입니다.';
    if (!value.includes('@') || !value.includes('.')) {
      return '올바른 이메일 주소를 입력해주세요.';
    }
    return '';
  };

  return <InputField label="이메일" type="email" validate={validateEmail} {...props} />;
};
