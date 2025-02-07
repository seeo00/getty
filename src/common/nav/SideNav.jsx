// SideNav.js (데스크탑 버전)
import React from 'react';
import { NavLink, IconWrapper, NavContainer, Divider } from './style';
import { useSelector } from 'react-redux';

const SideNav = () => {
  const { isCollapsed } = useSelector((state) => state.mainR);

  return (
    <NavContainer isCollapsed={isCollapsed}>
      <NavLink to='/home'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-home.svg'
            alt='nav-home'
          />
        </IconWrapper>
        {!isCollapsed && '홈'}
      </NavLink>
      <NavLink to='/popular'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-popular.svg'
            alt='nav-popular'
          />
        </IconWrapper>
        {!isCollapsed && '인기'}
      </NavLink>
      <NavLink to='/latest'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-latest.svg'
            alt='nav-latest'
          />
        </IconWrapper>
        {!isCollapsed && '최신'}
      </NavLink>
      <NavLink to='/original'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-original.svg'
            alt='nav-original'
          />
        </IconWrapper>
        {!isCollapsed && '오리지널'}
      </NavLink>
      <Divider isCollapsed={isCollapsed} />
      <NavLink to='/drama'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-drama.svg'
            alt='nav-drama'
          />
        </IconWrapper>
        {!isCollapsed && '드라마'}
      </NavLink>
      <NavLink to='/variety'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-popular.svg'
            alt='nav-popular' // 예능 아이콘이 별도로 없으면, 동일 아이콘 사용 (필요시 변경)
          />
        </IconWrapper>
        {!isCollapsed && '예능'}
      </NavLink>
      <NavLink to='/movie'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-movie.svg'
            alt='nav-movie'
          />
        </IconWrapper>
        {!isCollapsed && '영화'}
      </NavLink>
      <NavLink to='/anime'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-animation.svg'
            alt='nav-ani'
          />
        </IconWrapper>
        {!isCollapsed && '애니'}
      </NavLink>
      <NavLink to='/documentary'>
        <IconWrapper>
          <img
            src='https://raw.githubusercontent.com/seeo00/project-image-storage/refs/heads/main/images/icon/nav-documentary.svg'
            alt='nav-docu'
          />
        </IconWrapper>
        {!isCollapsed && '시사교양'}
      </NavLink>
    </NavContainer>
  );
};

export default SideNav;
