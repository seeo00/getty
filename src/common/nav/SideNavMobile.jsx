import React from 'react';
import { NavLink, IconWrapper, NavContainer, Divider, DimOverlay } from './styleMobile';
import { useSelector, useDispatch } from 'react-redux';

export const SideNavMobile = () => {
  const { isOpen } = useSelector((state) => state.mainR);
  const dispatch = useDispatch();

  // 오버레이 클릭 시 사이드 내비게이션 닫기 액션 디스패치
  const handleClose = () => {
    dispatch({ type: 'CLOSE_MOBILE_NAV' });
  };

  return (
    <>
      {isOpen && <DimOverlay onClick={handleClose} />}
      <NavContainer className={isOpen ? 'on' : ''}>
        <NavLink to='/home'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-home.svg'
              alt='nav-home'
            />
          </IconWrapper>
          홈
        </NavLink>
        <NavLink to='/popular'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-popular.svg'
              alt='nav-popular'
            />
          </IconWrapper>
          인기
        </NavLink>
        <NavLink to='/latest'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-latest.svg'
              alt='nav-latest'
            />
          </IconWrapper>
          최신
        </NavLink>
        <NavLink to='/original'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-original.svg'
              alt='nav-original'
            />
          </IconWrapper>
          오리지널
        </NavLink>
        <Divider />
        <NavLink to='/drama'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-drama.svg'
              alt='nav-drama'
            />
          </IconWrapper>
          드라마
        </NavLink>
        <NavLink to='/variety'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-reality.svg'
              alt='nav-reality'
            />
          </IconWrapper>
          예능
        </NavLink>
        <NavLink to='/movie'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-movie.svg'
              alt='nav-movie'
            />
          </IconWrapper>
          영화
        </NavLink>
        <NavLink to='/anime'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-animation.svg'
              alt='nav-ani'
            />
          </IconWrapper>
          애니
        </NavLink>
        <NavLink to='/documentary'>
          <IconWrapper>
            <img
              src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-documentary.svg'
              alt='nav-docu'
            />
          </IconWrapper>
          시사교양
        </NavLink>
      </NavContainer>
    </>
  );
};

export default SideNavMobile;
