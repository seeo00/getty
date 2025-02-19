import styled from 'styled-components';
import { color } from '../styled/common';

const Button = styled.button`
  padding: 8px 16px;
  font-size: 0.875rem;
  border: 1px solid ${({ $isActive }) => ($isActive ? `${color.primary[300]}` : `${color.gray[70]}`)};
  border-radius: 999px;
  background-color: ${({ $isActive }) => ($isActive ? `${color.primary[300]}` : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? `${color.white}` : `${color.gray[70]}`)};
  cursor: pointer;
`;

const CategoryButton = ({ label, isActive, onClick }) => {
  return (
    <Button $isActive={isActive} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CategoryButton;
