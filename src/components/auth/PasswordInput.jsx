import InputField from '../../ui/InputField';

export const PasswordInput = ({ mode = 'login', ...props }) => {
  const validatePassword = (value) => {
    if (!value) {
      if (mode === 'signup') {
        return '필수 정보입니다.';
      }
      return '';
    }

    if (mode === 'signup') {
      if (value.length < 6) {
        return '비밀번호는 최소 6자 이상으로 입력해주세요.';
      }
    }

    return '';
  };

  return (
    <InputField
      label={mode === 'signup' ? '비밀번호 설정' : '비밀번호'}
      type="password"
      validate={validatePassword}
      autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
      {...props}
    />
  );
};
