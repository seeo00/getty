import styled from 'styled-components';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { color } from '../styled/common';

const StyledTextField = styled(TextField)`
  & .MuiInputBase-input,
  & .MuiInputLabel-root,
  & .MuiFormHelperText-root.Mui-error {
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif !important;
  }

  // FilledInput 관련 공통 스타일
  & .MuiFilledInput-root {
    background-color: rgba(113, 113, 113, 0.3);
    border-radius: 8px;
    border: 1px solid rgba(73, 73, 73, 0.3);
    transition: border-color 0.3s;
    &:hover,
    &.Mui-focused {
      background-color: rgba(113, 113, 113, 0.3);
      border-color: rgba(73, 73, 73, 0.3);
    }
    &.Mui-error {
      border-color: ${color.red} !important;
    }
  }
  & .MuiFilledInput-underline {
    &:before,
    &:after {
      display: none !important;
    }
  }
  & .MuiInputLabel-root {
    color: ${color.gray[40]} !important;

    &.Mui-focused {
      color: ${color.white} !important;
    }
  }
  // 에러메시지 스타일
  & .MuiFormHelperText-root.Mui-error {
    color: ${color.red} !important;
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0px 2px !important;
    letter-spacing: -0.02em;
  }
  // 인풋 텍스트 색상
  & .MuiInputBase-input {
    color: ${color.white} !important;
  }
  & .MuiInputBase-root.Mui-disabled {
    background-color: rgba(73, 73, 73, 0.1) !important;
  }
  .MuiInputBase-input.Mui-disabled {
    -webkit-text-fill-color: #fff !important;
  }

  & .MuiInputBase-root.Mui-disabled:hover {
    background-color: rgba(73, 73, 73, 0.1) !important;
  }
  & .MuiInputBase-root.Mui-disabled {
    color: red !important;
  }
  .MuiInputAdornment-root {
    display: flex;
    align-items: center;
  }
`;

const InputField = ({
  label,
  type = 'text',
  name,
  enteredEmail,
  getErrorMessage,
  autoComplete,
  setIsEmailValid,
  setIsPasswordValid,
  ...props
}) => {
  const [value, setValue] = useState(enteredEmail || ''); // 입력필드 value 값 관리
  const [error, setError] = useState(''); // 입력필드 에러메시지 상태 관리
  const [isTouched, setIsTouched] = useState(false); // 사용자가 최초로 입력필드에서 포커스가 나갔는지 아닌지

  const onInputBlur = (e) => {
    setIsTouched(true);
    if (getErrorMessage) {
      setError(getErrorMessage(e.target.value));
    }
  };

  const onInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (isTouched) {
      setError(getErrorMessage(newValue));
    }

    const isValid = getErrorMessage(newValue) === '';
    if (type === 'email' && setIsEmailValid) {
      setIsEmailValid(isValid);
    }
    if (type === 'password' && setIsPasswordValid) {
      setIsPasswordValid(isValid);
    }
  };

  return (
    <StyledTextField
      fullWidth
      label={label}
      variant="filled"
      type={type}
      name={name}
      value={value}
      onChange={onInputChange}
      onBlur={onInputBlur}
      error={Boolean(error)}
      helperText={error}
      inputProps={{
        autoComplete: autoComplete || 'off',
      }}
      sx={{
        height: 80,
        '& .MuiFilledInput-root': {
          height: 56,
          boxSizing: 'border-box',
        },
      }}
      {...props}
    />
  );
};

export default InputField;
