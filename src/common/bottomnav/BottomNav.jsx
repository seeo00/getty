import { Link } from 'react-router-dom';
import { InnerContainer } from '../layout/InnerContainer';
import * as S from './style';
import { color } from '../../styled/common';
import { GuestUserIcon, NavHomeIcon, SearchIcon } from '../../ui/icon';

export const BottomNav = () => {
  return (
    <>
      <S.BottomNavContainer>
        <InnerContainer>
          <ul>
            <li>
              <Link to={'/home'}>
                <SearchIcon color={color.gray[70]} />
                <span className="blind">검색</span>
              </Link>
            </li>
            <li>
              <Link to={'/home'}>
                <NavHomeIcon color={color.gray[70]} />
                <span className="blind">홈</span>
              </Link>
            </li>
            <li>
              <Link to={'/home'}>
                <GuestUserIcon color={color.gray[70]} />
                <span className="blind">마이페이지</span>
              </Link>
            </li>
          </ul>
        </InnerContainer>
      </S.BottomNavContainer>
    </>
  );
};
