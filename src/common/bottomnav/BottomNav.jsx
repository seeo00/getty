import { BottomNavContainer, BottomNavButton, BottomNavUserButton, BottomNavSpace } from './styleMobile';

export const BottomNav = () => {
  return (
    <BottomNavContainer>
      <BottomNavSpace>
        <BottomNavButton>홈</BottomNavButton>
        <BottomNavButton>검색</BottomNavButton>
        <BottomNavUserButton />
      </BottomNavSpace>
    </BottomNavContainer>
  );
};
