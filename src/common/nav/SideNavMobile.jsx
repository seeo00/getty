import * as S from './styleMobile';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { navData } from '../../assets/api/navData';

export const SideNavMobile = () => {
  const highlightData = navData.slice(0, 4);
  const genreData = navData.slice(4, 9);
  const { isOpen } = useSelector((state) => state.mainR);
  const dispatch = useDispatch();

  useEffect(() => {
    // 스크롤바 너비 계산
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
      // CSS 변수로 스크롤바 너비 설정
      document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  // 오버레이 클릭 시 사이드 내비게이션 닫기 액션 디스패치
  const handleClose = () => {
    dispatch({ type: 'CLOSE_MOBILE_NAV' });
  };

  return (
    <>
      {isOpen && <S.DimOverlay onClick={handleClose} />}
      <S.NavContainer className={isOpen ? 'on' : ''}>
        <S.HighlightWrap>
          {highlightData.map(({ id, text, icon: Icon, link }) => (
            <li key={id}>
              <Link key={id} to={link}>
                <Icon />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </S.HighlightWrap>
        <S.GenreWrap>
          {genreData.map(({ id, text, icon: Icon, link }) => (
            <li key={id}>
              <Link key={id} to={link}>
                <Icon />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </S.GenreWrap>
      </S.NavContainer>
    </>
  );
};

export default SideNavMobile;
