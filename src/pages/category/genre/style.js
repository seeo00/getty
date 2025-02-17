import styled from 'styled-components';
import { respondTo } from '../../../styled/GlobalStyle';

export const GenreWrap = styled.div`
  margin-bottom: 28px;
  .inner {
    padding: 0;
    ${respondTo('desktop')} {
      padding: inherit;
    }
  }
`;

// export const ButtonArea = styled.div`
//   display: flex;
//   gap: 8px;
//   overflow-x: auto;
//   scroll-snap-type: x mandatory;
//   cursor: grab;
//   -webkit-overflow-scrolling: touch;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   button {
//     flex-shrink: 0;
//     &:first-child {
//       margin-left: 16px;
//     }
//     &:last-child {
//       margin-right: 16px;
//     }
//   }
//   padding: 16px 0 26px 0;
//   ${respondTo('tabletMore')} {
//     padding: 16px 0 40px 0;
//   }
//   ${respondTo('desktop')} {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 12px;
//     padding: 16px 40px 40px 40px;

//     button {
//       &:first-child,
//       &:last-child {
//         margin-left: 0;
//         margin-right: 0;
//       }
//     }
//   }
// `;

// export const ContentArea = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   ${respondTo('desktop')} {
//     gap: 12px;
//   }
//   > div {
//     flex-basis: calc(33.3333% - (16px / 3));

//     ${respondTo('tabletMore')} {
//       flex-basis: calc(20% - (32px / 5));
//     }

//     ${respondTo('desktop')} {
//       flex-basis: calc(20% - (48px / 5));
//     }
//   }
// `;
