import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideNav from '../nav/SideNav';
import SideNavMobile from '../nav/SideNavMobile';
import {
  HeaderContainer,
  LeftContainer,
  RightContainer,
  LogoButton,
  SearchBar,
  SearchInput,
  SearchToggleButton,
  UserButton,
} from './style';
import { respondTo } from '../../styled/GlobalStyle';

export const Header = () => {
  const dispatch = useDispatch();
  const { isCollapsed, isOpen } = useSelector((state) => state.mainR);
  const [isMobile, setIsMobile] = useState(respondTo('mobile'));
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const updateMedia = () => setIsMobile(window.innerWidth < 768);
    updateMedia(); // 초기값 설정
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const handleToggleSideNav = () => {
    const isNowMobile = window.innerWidth < 768; // 직접 width 체크
    if (isNowMobile) {
      dispatch({ type: isOpen ? 'CLOSE_MOBILE_NAV' : 'OPEN_MOBILE_NAV' });
    } else {
      dispatch({ type: 'TOGGLE_SIDENAV' }); // 데스크탑에서는 isCollapsed만 변경
    }
  };

  // 검색 아이콘(X) 클릭시 검색창 토글
  const handleSearchToggle = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <LeftContainer>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/menu.svg'
            alt='menu'
            style={{ marginLeft: '10px', cursor: 'pointer' }}
            onClick={handleToggleSideNav}
          />
          <LogoButton>로고</LogoButton>
        </LeftContainer>
        <RightContainer>
          <SearchBar active={isSearchActive}>
            {isSearchActive && (
              <SearchInput
                type='text'
                placeholder='제목, 사람, 장르 검색...'
                autoFocus
              />
            )}
            <SearchToggleButton onClick={handleSearchToggle}>
              {isSearchActive ? (
                'X'
              ) : (
                <img
                  src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/search.svg'
                  alt='search'
                  style={{ width: '24px', height: '24px' }}
                />
              )}
            </SearchToggleButton>
          </SearchBar>
          <UserButton />
        </RightContainer>
      </HeaderContainer>
      {/* 데스크탑과 모바일 분리 */}
      {!isMobile && <SideNav />}
      {isMobile && <SideNavMobile />}
    </>
  );
};
