import styled from 'styled-components';
import { color } from '../../styled/common';

export const CardWrap = styled.div`
  background: ${color.gray[800]};
  max-width: 100%;
  min-height: 100%;

  .inner {
    max-width: 100%;
    /* 높이를 고정하지 않고 콘텐츠에 따라 늘어나게 수정 */
    min-height: 400px;
    margin: 0 auto;
    padding: 40px;
    background: ${color.gray[80]};
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  /* 헤더 영역 (h2와 버튼 감싸는 컨테이너) */
  .header {
    margin-bottom: 40px;
    /* background: ${color.primary[100]};  */
  }

  /* 제목 스타일 */
  .header h2 {
    font-size: 4rem;
    font-weight: 700;
    margin: 0 0 20px 0;
    text-align: left;
    color: ${color.white};
  }

  /* 본문 스타일 */
  p {
    text-align: center;
    font-size: 18px;
    color: ${color.footertext};
  }
`;
