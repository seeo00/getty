import React, { useState } from 'react';
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
import { NavLink, IconWrapper, NavContainer, Divider } from './style';

function SideNav({ isCollapsed }) {
    return (
        <NavContainer isCollapsed={isCollapsed}>
            <NavLink to='/home'>
                <IconWrapper>
                    <PiHouse />
                </IconWrapper>
                {!isCollapsed && '홈'}
            </NavLink>
            <NavLink to='/popular'>
                <IconWrapper>
                    <PiStar />
                </IconWrapper>
                {!isCollapsed && '인기'}
            </NavLink>
            <NavLink to='/latest'>
                <IconWrapper>
                    <PiClock />
                </IconWrapper>
                {!isCollapsed && '최신'}
            </NavLink>
            <NavLink to='/original'>
                <IconWrapper>
                    <PiFilmReel />
                </IconWrapper>
                {!isCollapsed && '오리지널'}
            </NavLink>
            <Divider />
            <NavLink to='/drama'>
                <IconWrapper>
                    <PiTelevision />
                </IconWrapper>
                {!isCollapsed && '드라마'}
            </NavLink>
            <NavLink to='/variety'>
                <IconWrapper>
                    <PiSmiley />
                </IconWrapper>
                {!isCollapsed && '예능'}
            </NavLink>
            <NavLink to='/movie'>
                <IconWrapper>
                    <PiPopcorn />
                </IconWrapper>
                {!isCollapsed && '영화'}
            </NavLink>
            <NavLink to='/anime'>
                <IconWrapper>
                    <PiCamera />
                </IconWrapper>
                {!isCollapsed && '애니'}
            </NavLink>
            <NavLink to='/documentary'>
                <IconWrapper>
                    <PiNewspaper />
                </IconWrapper>
                {!isCollapsed && '시사교양'}
            </NavLink>
        </NavContainer>
    );
}

export default SideNav;
