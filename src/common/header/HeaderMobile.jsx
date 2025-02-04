import React from 'react';
import { MobileHeaderContainer, MobileNav, MobileNavButton, MobileUserButton } from './styleMobile';

export const HeaderMobile = () => {
    return (
        <MobileHeaderContainer>
            <MobileNav>
                <MobileNavButton>홈</MobileNavButton>
                <MobileNavButton>검색</MobileNavButton>
                <MobileUserButton />
            </MobileNav>
        </MobileHeaderContainer>
    );
};
