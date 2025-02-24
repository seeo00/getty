import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const FooterContainer = styled.footer`
  color: ${color.gray[60]};
`;

export const FooterNotice = styled.div`
  display: none;

  ${respondTo('desktop')} {
    display: block;
    border-top: 1px solid ${color.gray[500]};
    border-bottom: 1px solid ${color.gray[500]};

    .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .notice {
        display: flex;
        align-items: center;
        padding: 16px 0;
        gap: 24px;
        strong {
          font-size: 1.125rem;
        }
      }
      .button {
        display: flex;
        button {
          padding: 12px;
          border-left: 1px solid ${color.gray[500]};
          border-right: 1px solid ${color.gray[500]};

          &:first-child {
            border-right: none;
          }
        }
        svg {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;

export const FooterInner = styled.div`
  border-top: 1px solid ${color.gray[500]};
  padding: 20px 0 84px 0;

  .inner {
    padding: 0px;
  }

  ${respondTo('desktop')} {
    border-top: none;
    .inner {
      padding: 0px 40px;
    }
  }

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
