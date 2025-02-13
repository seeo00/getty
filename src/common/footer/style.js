import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${color.gray[800]};
  padding: 20px 20px 20px 273px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${respondTo('mobile')} {
    display: block;
    padding: 15px 15px 90px 15px;
    width: 100%;
  }
`;

export const TapContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;
  background-color: ${color.gray[800]};
`;

export const Tab = styled.a`
  color: ${color.footertext};
  text-decoration: none;
  padding-right: 24px;
  font-size: 16px;

  &:hover {
    color: ${color.white};
  }
`;

export const FooterText = styled.div`
  font-size: 12px;
  text-align: left;
  line-height: 1.5;
  color: ${color.footertext};
`;
