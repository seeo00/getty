import * as S from './style';
import { InnerContainer } from '../layout/InnerContainer';

const AuthHeader = () => {
  return (
    <S.AuthHeaderContainer>
      <InnerContainer maxWidth="100%" className="inner">
        <h1>
          <S.Logo to={'/'} $auth>
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
