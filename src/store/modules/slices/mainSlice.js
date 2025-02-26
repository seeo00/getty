// const initialState = {
//   isOpen: false, // 모바일용 사이드바 (완전히 나타나거나 사라짐)
//   isCollapsed: true, // 데스크탑용 사이드바 (축소/확장)
// };

// export default function mainR(state = initialState, action) {
//   switch (action.type) {
//     case 'TOGGLE_SIDENAV': // 데스크탑용
//       return { ...state, isCollapsed: !state.isCollapsed };
//     case 'OPEN_MOBILE_NAV': // 모바일용
//       return { ...state, isOpen: true };
//     case 'CLOSE_MOBILE_NAV': // 모바일용
//       return { ...state, isOpen: false };
//     default:
//       return state;
//   }
// }
