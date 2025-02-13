import styled from 'styled-components';
import { color } from '../../styled/common/';

export const BannerWrap = styled.section`
  width: 100%;
  /* max-width: 100vw; 원하는 최대 너비 */
  margin: 0;
  overflow: hidden;
  background: ${color.gray[800]};
`;
export const MainWrap = styled.div`
  padding: 0 116px;
  margin: 0 auto;

  &.main {
  }
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    display: block;
    font-size: 28px;
    font-weight: 400;
  }
`;
