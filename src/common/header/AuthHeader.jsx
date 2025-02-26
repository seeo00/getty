import * as S from './style';
import { InnerContainer } from '../layout/InnerContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from '../../store/modules/slices/authSlice';

const AuthHeader = () => {
  const { authed, user } = useSelector((state) => state.authR);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authed && user.profiles.length > 0 && user.selectedProfile === undefined) {
      dispatch(authActions.setSelectedProfile(null));
      localStorage.removeItem('selectedProfile');
    }
  }, [authed, user, dispatch]);

  const handleLogoClick = () => {
    if (authed && user.profiles.length > 0) {
      const defaultProfile = user.profiles[0];
      dispatch(authActions.setSelectedProfile(defaultProfile));
      localStorage.setItem('selectedProfile', JSON.stringify(defaultProfile));
    }
  };

  return (
    <S.AuthHeaderContainer>
      <InnerContainer maxWidth="100%" className="inner">
        <h1>
          <S.Logo to={'/'} $auth onClick={handleLogoClick}>
            <img
              src="https://raw.githubusercontent.com/seeo00/project-image-storage/fbc71b631d8e6979cde5486414b5c1b2781dc621/images/logo/2.line.svg"
              alt="getty"
            />
            <span className="blind">게티</span>
          </S.Logo>
        </h1>
      </InnerContainer>
    </S.AuthHeaderContainer>
  );
};

export default AuthHeader;
