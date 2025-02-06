import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

//모바일
export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: -100%;
  width: 218px;
  height: 100vh;
  background-color: ${color.gray[800]};
  color: ${color.gray[70]};
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* transition: left 0.3s ease-in-out; */
  z-index: 200;

  &.on {
    left: 0;
  }

  ${respondTo('mobile')} {
    position: absolute;
    margin-top: 59px;
    display: block;
  }
  ${respondTo('tablet')} {
    display: none;
  }
  ${respondTo('desktop')} {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 10px 0;
    color: ${color.white};
    text-decoration: none;
    gap: 10px;
    justify-content: flex-start;
  }

  a:hover {
    background-color: ${color.white};
    color: ${color.primary[300]};
    border-radius: 8px;
  }
`;

export const NavLink = styled(Link)`
  color: ${color.gray[70]};
  text-decoration: none;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${color.primary[300]};
  }
`;

export const IconWrapper = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Divider = styled.div`
  background-color: ${color.gray[70]};
  height: 1px;
  width: 216px;
  margin: 50px auto;

  ${respondTo('mobile')} {
    margin: 50px -20px;
  }
`;

export const DimOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 199;
`;
