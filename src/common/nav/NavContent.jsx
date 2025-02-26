import { Link, useLocation } from 'react-router-dom';
import { navData } from '../../assets/api/navData';

const NavContent = ({ isCollapsed = false, styleComponents: S }) => {
  const location = useLocation();
  const highlightData = navData.slice(0, 4);
  const genreData = navData.slice(4, 9);

  return (
    <>
      <S.HighlightWrap $isCollapsed={isCollapsed}>
        {highlightData.map(({ id, text, icon: Icon, link }) => (
          <li key={id}>
            <Link to={link} className={location.pathname === link ? 'active' : ''}>
              <Icon />
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </S.HighlightWrap>
      <S.GenreWrap $isCollapsed={isCollapsed}>
        {genreData.map(({ id, text, icon: Icon, link }) => (
          <li key={id}>
            <Link to={link} className={location.pathname === link ? 'active' : ''}>
              <Icon />
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </S.GenreWrap>
    </>
  );
};

export default NavContent;
