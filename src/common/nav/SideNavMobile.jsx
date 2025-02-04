import React from 'react';
import {
  PiHouse,
  PiStar,
  PiClock,
  PiFilmReel,
  PiTelevision,
  PiSmiley,
  PiPopcorn,
  PiCamera,
  PiNewspaper,
} from 'react-icons/pi';
import { NavLink, IconWrapper, NavContainer, Divider } from './styleMobile';
import { useSelector, useDispatch } from 'react-redux';

export const SideNavMobile = () => {
  const { isOpen } = useSelector((state) => state.mainR);

  return (
    <NavContainer className={`nav ${isOpen ? 'on' : ''}`}>
      <NavLink to='/home'>
        <IconWrapper>
          <PiHouse />
        </IconWrapper>
        홈
      </NavLink>
      <NavLink to='/popular'>
        <IconWrapper>
          <PiStar />
        </IconWrapper>
        인기
      </NavLink>
      <NavLink to='/latest'>
        <IconWrapper>
          <PiClock />
        </IconWrapper>
        최신
      </NavLink>
      <NavLink to='/original'>
        <IconWrapper>
          <PiFilmReel />
        </IconWrapper>
        오리지널
      </NavLink>
      <Divider />
      <NavLink to='/drama'>
        <IconWrapper>
          <PiTelevision />
        </IconWrapper>
        드라마
      </NavLink>
      <NavLink to='/variety'>
        <IconWrapper>
          <PiSmiley />
        </IconWrapper>
        예능
      </NavLink>
      <NavLink to='/movie'>
        <IconWrapper>
          <PiPopcorn />
        </IconWrapper>
        영화
      </NavLink>
      <NavLink to='/anime'>
        <IconWrapper>
          <PiCamera />
        </IconWrapper>
        애니
      </NavLink>
      <NavLink to='/documentary'>
        <IconWrapper>
          <PiNewspaper />
        </IconWrapper>
        시사교양
      </NavLink>
    </NavContainer>
  );
};
