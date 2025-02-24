import * as S from './style';
import { useEffect, useState } from 'react';
import { InnerContainer } from '../layout/InnerContainer';
import { MenuIcon } from '../../ui/icon';
import UserButton from './UserButton';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchButton from './SearchButton';

export const Header = ({ onToggleSideNav }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const updateMedia = () => setIsMobile(window.innerWidth < 1280);
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    if (location.pathname === '/search') {
      setIsActive(true);
    } else {
      setTimeout(() => setIsActive(false), 300);
    }
  }, [location.pathname]);

  const handleToggleSideNav = () => {
    if (onToggleSideNav) {
      onToggleSideNav(isMobile);
    }
  };

  return (
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
          <SearchButton
            isActive={isActive}
            setIsActive={setIsActive}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <UserButton isMobile={false} />
        </S.RightContainer>
      </InnerContainer>
    </S.HeaderContainer>
  );
};
