import { Checkbox, FormControlLabel } from '@mui/material';
import styled from 'styled-components';
import { color } from '../styled/common';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    margin-left: 0;
    margin-right: 0;
    gap: 8px;
  }
  & .MuiTypography-root {
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    font-size: 0.875rem;
    color: ${color.gray[40]};
  }
`;

const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    padding: 0;
    &.MuiButtonBase-root {
      overflow: hidden;
    }

    .MuiSvgIcon-root {
      width: 20px;
      height: 20px;
    }

    svg {
      fill: ${color.gray[40]};
    }
  }
`;

const StyledIconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckBox = ({ label, checked, onChange, name, showIcon = false }) => {
  return (
    <StyledIconBox>
      <StyledFormControlLabel
        control={<StyledCheckbox disableRipple name={name} checked={checked} onChange={onChange} />}
        label={label}
      />
      {showIcon && (
        <StyledLink to={undefined}>
          <IoIosArrowForward />
        </StyledLink>
      )}
    </StyledIconBox>
  );
};

export default CheckBox;
