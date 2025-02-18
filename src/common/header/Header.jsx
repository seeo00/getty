import * as S from './style';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideNav from '../nav/SideNav';
import SideNavMobile from '../nav/SideNavMobile';
import { InnerContainer } from '../layout/InnerContainer';
import { Link } from 'react-router-dom';
import { AlertErrorIcon, GuestUserIcon, MenuIcon, SearchIcon } from '../../ui/icon';
import { color } from '../../styled/common';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const { isCollapsed, isOpen } = useSelector((state) => state.mainR);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const updateMedia = () => setIsMobile(window.innerWidth < 1280);
    updateMedia(); // 초기값 설정
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const handleToggleSideNav = () => {
    const isNowMobile = window.innerWidth < 1280;
    if (isNowMobile) {
      dispatch({ type: isOpen ? 'CLOSE_MOBILE_NAV' : 'OPEN_MOBILE_NAV' });
    } else {
      dispatch({ type: 'TOGGLE_SIDENAV' });
    }
  };

  const handleOpenSearch = () => {
    setIsActive(true);
  };

  return (
    <>
      <S.HeaderContainer>
        <InnerContainer maxWidth="100%" className="inner">
          <S.LeftContainer>
            <button onClick={handleToggleSideNav}>
              <MenuIcon />
            </button>
            <h1>
              <S.Logo to={'/'}>
                <img
                  src="https://raw.githubusercontent.com/seeo00/project-image-storage/fbc71b631d8e6979cde5486414b5c1b2781dc621/images/logo/2.line.svg"
                  alt="getty"
                />
                <span className="blind">게티</span>
              </S.Logo>
            </h1>
          </S.LeftContainer>
          <S.RightContainer>
            <S.SearchContainer $active={isActive}>
              <S.SearchButton onClick={handleOpenSearch} $active={isActive}>
                <SearchIcon color={color.gray[70]} />
              </S.SearchButton>
              <S.SearchInput
                type="text"
                placeholder="제목, 장르, 배우 검색..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                $active={isActive}
              />
              {searchText.length > 0 && (
                <S.ClearButton onClick={() => setSearchText('')}>
                  <AlertErrorIcon stroke={color.gray[70]} />
                </S.ClearButton>
              )}
            </S.SearchContainer>
            <button>
              <GuestUserIcon color={color.gray[70]} />
            </button>
          </S.RightContainer>
        </InnerContainer>
      </S.HeaderContainer>

      {!isMobile && <SideNav />}
      {isMobile && <SideNavMobile />}
    </>
  );
};
