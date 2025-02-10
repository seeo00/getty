import styled from 'styled-components';
import { color } from '../../styled/common';

export const AuthCard = styled.div`
  width: 100%;
  padding: 80px 60px;
  background-color: rgba(73, 73, 73, 0.3);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.div`
  font-size: 1.125rem;
  color: ${color.gray[10]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const Separator = styled.div`
  width: 100%;
`;
