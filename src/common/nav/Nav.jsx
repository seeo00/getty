import { useEffect, useState } from 'react';
import NavContent from './NavContent';
import * as DesktopS from './style';
import * as MobileS from './styleMobile';

const Nav = ({ isCollapsed, isOpen, onClose, bannerHeight }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const updateMedia = () => setIsMobile(window.innerWidth < 1280);
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const getScrollbarWidth = () => {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll';
      document.body.appendChild(outer);
      const inner = document.createElement('div');
      outer.appendChild(inner);
      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      return scrollbarWidth;
    };

    if (isOpen) {
      document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOpen, isMobile]);

  if (isMobile) {
    return (
      <>
        {isOpen && <MobileS.DimOverlay onClick={onClose} />}
        <MobileS.NavContainer className={isOpen ? 'on' : ''}>
          <NavContent styleComponents={MobileS} />
        </MobileS.NavContainer>
      </>
    );
  }

  return (
    <DesktopS.NavContainer $isCollapsed={isCollapsed} $bannerHeight={bannerHeight}>
      <NavContent isCollapsed={isCollapsed} styleComponents={DesktopS} />
    </DesktopS.NavContainer>
  );
};

export default Nav;
