import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const FooterContainer = styled.footer``;

export const FooterInner = styled.div`
  border-top: 1px solid ${color.gray[500]};
  padding: 20px 0 84px 0;

  ${respondTo('tabletMore')} {
    padding: 20px 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 0.875rem;
    a {
      color: ${color.gray[70]};
      &:hover {
        color: ${color.primary[300]};

        strong {
          color: ${color.gray[70]};
        }
      }
    }

    strong {
      font-weight: 700;
    }
  }

  .footer-content {
    padding-top: 20px;
    color: ${color.footertext};
    font-size: 0.75rem;
    font-weight: 300;
  }

  ${respondTo('desktop')} {
    ul {
      font-size: 1rem;
      gap: 20px;
    }
    .footer-content {
      font-size: 0.875rem;
    }
  }
`;
