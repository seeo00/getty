/* 
color, font 변수
파일이름 common.js
파일 경로 src/styled/common.js  
적용할 컴포넌트에 해당경로 임포트해서 사용
*/

export const color = {
  white: '#fff',
  black: '#000',
  red: '#E22020',
  yellow: '#f8e432',
  footertext: '#989899',
  primary: {
    50: '#e6ecff',
    75: '#96b1ff',
    100: '#6b90ff',
    200: '#2b60ff',
    300: '#0040ff',
    400: '#002db3',
    500: '#00279c',
  },
  gray: {
    10: '#fafafa',
    20: '#f6f6f6',
    30: '#ececec',
    40: '#e0e0e0',
    50: '#c4c4c4',
    60: '#b6b6b6',
    70: '#aaaaaa',
    80: '#9b9b9b',
    90: '#8d8d8d',
    100: '#7F7F7F',
    200: '#717171',
    300: '#636363',
    400: '#575757',
    500: '#494949',
    600: '#3D3D3D',
    700: '#2C2C2C',
    800: '#1E1E1E',
    900: '#121212',
  },
};

/* 
스타일드 컴포넌트 칼라 사용법 
예시
export const NavContainer = styled.nav`
  background: ${color.gray[800]} 1e1e1e ;
	` 
*/

/* 폰트는 더 복잡해지므로 그냥 직접 입력하고 수정할 폰트가 생기면 해당 요소 찾아서 수정하는걸 선생님이 추천해주심

스타일 컴포넌트 폰트 사용법
const BoldText = styled.p`
font-size: ${fonts.NotoSans.bold44_auto.fontSize};
line-height: ${fonts.NotoSans.bold44_auto.lineHeight};
직접입력 font-size: 16px 훨씬 편하고 디자인이 이미 돼있어서 바꿀일 많지 않음. 변수 사용 비효율적

`; */
// export const fonts = {
//   NotoSans: {
//     // Regular
//     regular12_15: { fontWeight: '400', fontSize: '12px', lineHeight: '15px' },
//     regular12_auto: { fontWeight: '400', fontSize: '12px', lineHeight: 'auto' },
//     regular14_20: { fontWeight: '400', fontSize: '14px', lineHeight: '20px' },
//     regular16_auto: { fontWeight: '400', fontSize: '16px', lineHeight: 'auto' },
//     regular16_24: { fontWeight: '400', fontSize: '16px', lineHeight: '24px' },
//     regular18_auto: { fontWeight: '400', fontSize: '18px', lineHeight: 'auto' },
//     regular20_auto: { fontWeight: '400', fontSize: '20px', lineHeight: 'auto' },
//     regular24_auto: { fontWeight: '400', fontSize: '24px', lineHeight: 'auto' },
//     regular28_auto: { fontWeight: '400', fontSize: '28px', lineHeight: 'auto' },
//     regular32_auto: { fontWeight: '400', fontSize: '32px', lineHeight: 'auto' },

//     // Medium
//     medium13_24: { fontWeight: '500', fontSize: '13px', lineHeight: '24px' },
//     medium16_24: { fontWeight: '500', fontSize: '16px', lineHeight: '24px' },
//     medium20_24: { fontWeight: '500', fontSize: '20px', lineHeight: '24px' },
//     medium24_auto: { fontWeight: '500', fontSize: '24px', lineHeight: 'auto' },

//     // Bold
//     bold44_auto: { fontWeight: '700', fontSize: '44px', lineHeight: 'auto' },
//     bold64_auto: { fontWeight: '700', fontSize: '64px', lineHeight: 'auto' },
//     bold80_auto: { fontWeight: '700', fontSize: '80px', lineHeight: 'auto' },
//     bold128_auto: { fontWeight: '700', fontSize: '128px', lineHeight: 'auto' },

//     // Demilight
//     demilight12_100: { fontWeight: '300', fontSize: '12px', lineHeight: '100px' },
//     demilight10_100: { fontWeight: '300', fontSize: '10px', lineHeight: '100px' },

//     // Underline
//     underline14_auto: { fontWeight: '400', fontSize: '14px', lineHeight: 'auto' },
//     underline16_auto: { fontWeight: '400', fontSize: '16px', lineHeight: 'auto' },
//   },
// };
