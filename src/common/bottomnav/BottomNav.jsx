import * as S from './style';
import { Link, useLocation } from 'react-router-dom';
import { InnerContainer } from '../layout/InnerContainer';
import { bottomNavData } from '../../assets/api/navData';

export const BottomNav = () => {
  const location = useLocation();
  return (
    <>
      <S.BottomNavContainer>
        <InnerContainer>
          <ul>
            {bottomNavData.map(({ id, text, icon: Icon, link }) => (
              <li key={id}>
                <Link to={link} className={location.pathname === link ? 'active' : ''}>
                  <Icon />
                  <span className="blind">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </InnerContainer>
      </S.BottomNavContainer>
    </>
  );
};
