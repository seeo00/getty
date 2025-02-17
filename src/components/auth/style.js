import styled from 'styled-components';
import { color } from '../../styled/common';
import { respondTo } from '../../styled/GlobalStyle';

export const AuthCard = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 40px
  padding-top: 40px;
  min-height: 60svh;

  ${respondTo('tabletMore')} {
    width: 100%;
    min-height: 680px;
    padding: 80px 60px;
    background-color: ${color.gray[800]};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    //gap: 40px;
  }
  ${respondTo('desktop')} {
    background-color: rgba(71, 71, 71, 0.3);
  }
`;

export const Title = styled.div`
  font-size: 1.125rem;
  padding-bottom: 40px;
  word-break: keep-all;
  p:nth-child(2),
  p:nth-child(4) {
    width: 75%;
    ${respondTo('tabletMore')} {
      width: 100%;
    }
  }
`;

export const TitleP = styled.p`
  margin-top: ${(props) => props.$mt};
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > button {
    margin-top: auto;
  }
`;

export const BottomBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //gap: 20px;
  > button {
    margin-top: auto;
  }
`;

export const Separator = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${color.gray[40]};
  font-size: 0.875rem;
  &::before {
    content: '';
    display: block;
    flex: 1;
    height: 1px;
    background-color: ${color.gray[200]};
    margin-right: 12px;
  }
  &::after {
    content: '';
    display: block;
    flex: 1;
    height: 1px;
    background-color: ${color.gray[200]};
    margin-left: 12px;
  }
`;

export const SocialBtnBox = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const TextBtnBox = styled.div`
  margin-top: 20px;
  font-size: 0.875rem;
  color: ${color.gray[40]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.$justifyEnd ? 'flex-end' : 'center')};
  gap: 4px;
  button {
    color: ${color.gray[40]};
  }
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Highlight = styled.span`
  color: ${color.primary[300]};
`;
