import styled from 'styled-components';

export const color = {
  white: '#fff',
  black: '#000',
  red: '#E22020',
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

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 296px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const Subtitle = styled.p`
  color: ${color.gray[400]};
  margin-bottom: 80px;
  text-align: center;
`;

export const ProfileGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const ProfileItem = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const ProfileCircle = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
  background-color: ${color.gray[600]};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  ${ProfileItem}:hover & {
    box-shadow: 0 0 0 4px ${color.primary[300]};
  }
`;

export const AddProfileCircle = styled(ProfileCircle)`
  background-color: transparent;
  border: 2px dashed ${color.gray[600]};

  &:hover {
    border-color: ${color.primary[300]};
  }
`;

export const ProfileName = styled.span`
  font-size: 1.125rem;
  color: ${color.white};
`;
