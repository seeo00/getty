import { useState } from 'react';
import InputField from '../../ui/InputField';
import { IconButton, InputAdornment } from '@mui/material';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { color } from '../../styled/common';

export const PasswordInput = ({ mode = 'login', name, setIsPasswordValid, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const validatePassword = (value) => {
    if (!value) {
      return '필수 정보입니다.';
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
      type={showPassword ? 'text' : 'password'}
      name={name}
      getErrorMessage={validatePassword}
      setIsPasswordValid={setIsPasswordValid}
      autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
              {showPassword ? (
                <MdOutlineVisibility color={`${color.gray[40]}`} />
              ) : (
                <MdOutlineVisibilityOff color={`${color.gray[40]}`} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
