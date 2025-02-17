import * as S from './style';
import { InnerContainer } from '../layout/InnerContainer';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <S.AuthHeaderContainer>
      <InnerContainer maxWidth="100%" className="inner">
        <h1>
          <Link to={'/'}>
            로고이미지자리
            <span className="blind">로고</span>
          </Link>
        </h1>
      </InnerContainer>
    </S.AuthHeaderContainer>
  );
};

export default AuthHeader;
