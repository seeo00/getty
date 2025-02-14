import { useState } from 'react';
import InputField from '../../ui/InputField';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityOffIcon from '../../ui/icon/VisibilityOffIcon';
import VisibilityOnIcon from '../../ui/icon/VisibilityOnIcon';

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
              {showPassword ? <VisibilityOnIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
