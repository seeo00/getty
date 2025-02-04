import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { PiList } from 'react-icons/pi';
import {
    HeaderContainer,
    LeftContainer,
    RightContainer,
    LogoButton,
    SearchBar,
    SearchInput,
    UserButton,
} from './style';
import SideNav from '../nav/SideNav';

export const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            <HeaderContainer>
                <LeftContainer>
                    <PiList
                        style={{ marginLeft: '10px', cursor: 'pointer' }}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                    <LogoButton>로고</LogoButton>
                </LeftContainer>
                <RightContainer>
                    <SearchBar>
                        <SearchInput
                            type='text'
                            placeholder='검색어를 입력하세요...'
                        />
                        <FiSearch style={{ marginLeft: 'auto' }} />
                    </SearchBar>
                    <UserButton />
                </RightContainer>
            </HeaderContainer>
            <SideNav isCollapsed={isCollapsed} />
        </>
    );
};
