// SideNav.js (데스크탑 버전)
import * as S from './style';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navData } from '../../assets/api/navData';

const SideNav = () => {
  const { isCollapsed } = useSelector((state) => state.mainR);
  const highlightData = navData.slice(0, 4);
  const genreData = navData.slice(4, 9);

  return (
    <>
      <S.NavContainer isCollapsed={isCollapsed}>
        <S.HighlightWrap isCollapsed={isCollapsed}>
          {highlightData.map(({ id, text, icon: Icon, link }) => (
            <li key={id}>
              <Link key={id} to={link}>
                <Icon />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </S.HighlightWrap>
        <S.GenreWrap isCollapsed={isCollapsed}>
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

export default SideNav;
