import styled from 'styled-components';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { color } from '../styled/common';

const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif !important;
    color: ${color.white} !important;
  }
  & .MuiFilledInput-root {
    background-color: rgba(113, 113, 113, 0.3);
    border-radius: 8px;
    border: 1px solid rgba(73, 73, 73, 0.3);
    transition: border-color 0.3s;
  }
  & .MuiFilledInput-root.Mui-error {
    border-color: ${color.red} !important;
  }
  & .MuiFilledInput-underline:before,
  & .MuiFilledInput-underline:after {
    display: none !important;
  }

  & .MuiFilledInput-root:hover {
    background-color: rgba(113, 113, 113, 0.3);
    border-color: rgba(73, 73, 73, 0.3);
  }
  & .MuiFilledInput-root.Mui-focused {
    background-color: rgba(113, 113, 113, 0.3);
    border-color: rgba(73, 73, 73, 0.3);
  }
  & .MuiInputLabel-root {
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif !important;
    color: ${color.gray[40]} !important;
  }
  /* & .MuiInputLabel-root.Mui-error {
    color: ${color.gray[40]} !important;
  } */
  & .Mui-focused.MuiInputLabel-root {
    color: ${color.white} !important;
  }
  /* & .Mui-focused.MuiInputLabel-root.Mui-error {
    color: white !important;
  } */

  & .MuiFormHelperText-root.Mui-error {
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif !important;
    color: ${color.red} !important;
    font-size: 0.75rem;
    font-weight: 400;
    margin: 4px 2px 0px 2px !important;
  }
`;

const InputField = ({ label, type = 'text', validate, autoComplete, ...props }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const handleInputBlur = (e) => {
    setIsTouched(true);
    if (validate) {
      setError(validate(e.target.value));
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (isTouched && validate) {
      setError(validate(newValue));
    }
  };

  return (
    <StyledTextField
      fullWidth
      label={label}
      variant="filled"
      type={type}
      value={value}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      error={!!error}
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
