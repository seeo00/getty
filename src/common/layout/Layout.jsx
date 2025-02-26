import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import { BottomNav } from '../bottomnav/BottomNav';
import { Header } from '../header/Header';
import Nav from '../nav/Nav';
import { respondTo } from '../../styled/GlobalStyle';
import PromotionBanner from '../promotion/PromotionBanner';
import { useSelector } from 'react-redux';

const ContentWrap = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  padding-bottom: ${({ $bannerHeight }) => `${$bannerHeight}px`};
  .main {
    width: 100%;
    flex: 1;
  }
  ${respondTo('desktop')} {
    padding-left: ${({ $isCollapsed }) => ($isCollapsed ? '104px' : '256px')};
  }
`;

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef(null);

  const { authed, user } = useSelector((state) => state.authR);

  useEffect(() => {
    const updateBannerHeight = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      } else {
        setBannerHeight(0);
      }
    };

    updateBannerHeight();
    window.addEventListener('resize', updateBannerHeight);
    return () => window.removeEventListener('resize', updateBannerHeight);
  }, []);

  const handleToggleSideNav = (isMobile) => {
    if (isMobile) {
      setIsOpen((prev) => !prev); // 모바일
    } else {
      setIsCollapsed((prev) => !prev); // 데스크탑
    }
  };

  return (
    <>
      <Header onToggleSideNav={handleToggleSideNav} />
      <Nav isCollapsed={isCollapsed} isOpen={isOpen} onClose={() => setIsOpen(false)} bannerHeight={bannerHeight} />
      <ContentWrap $isCollapsed={isCollapsed} $bannerHeight={bannerHeight}>
        <main className="main swiper-parent-container">
          <Outlet context={{ isCollapsed }} />
        </main>
        <Footer className="footer" />
      </ContentWrap>
      {(authed === false || user.subscribed === false) && <PromotionBanner ref={bannerRef} />}
      <BottomNav />
    </>
  );
};

export default Layout;
