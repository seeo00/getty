import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { Link } from 'react-router-dom';

export const SectionArea = styled.div`
  padding: 40px 0;
  .inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  ${respondTo('desktop')} {
    padding: 90px 0;
    .inner {
      gap: 74px;
    }
  }
`;

// 배너 스와이퍼
// export const BannerWrap = styled.section`
//   .inner {
//     position: relative;
//   }
//   .swiper {
//     overflow: visible;
//   }
// `;

// export const SlideContainer = styled(Link)`
//   display: block;
//   position: relative;
//   aspect-ratio: 4 / 5;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: right;
//   }
//   ${respondTo('tabletMore')} {
//     aspect-ratio: auto;
//   }
// `;

// export const NavButton = styled.button`
//   display: none;

//   ${respondTo('desktop')} {
//     display: flex;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     z-index: 10;
//     border: none;
//     cursor: pointer;
//     opacity: 0.5;
//     &:hover {
//       opacity: 1;
//     }

//     ${({ $prev }) => $prev && `left: -8px;`}
//     ${({ $next }) => $next && `right: -8px;`}
//   }
// `;
