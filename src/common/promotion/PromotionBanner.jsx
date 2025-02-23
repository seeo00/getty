import * as S from './style';

import { InnerContainer } from '../layout/InnerContainer';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/button/Button';

const PromotionBanner = forwardRef(function PromotionBanner(props, ref) {
  const { authed, user } = useSelector((state) => state.authR);
  const navigate = useNavigate();

  return (
    <S.BannerContainer ref={ref}>
      <InnerContainer maxWidth={'100%'}>
        <S.FlexContainer>
          <div>
            <S.Title>구독을 시작하고 모든 콘텐츠를 무제한으로 감상해 보세요!</S.Title>
            <S.Desc>화제의 인기작부터 독점 신작까지 즐겨보세요.</S.Desc>
          </div>
          {authed && !user.subscribed ? (
            <Button
              $variant="outline"
              width={'auto'}
              onClick={() => {
                navigate('/subscription');
              }}
            >
              구독하기
            </Button>
          ) : (
            <Button
              $variant="outline"
              width={'auto'}
              onClick={() => {
                navigate('/auth');
              }}
            >
              회원가입
            </Button>
          )}
        </S.FlexContainer>
      </InnerContainer>
    </S.BannerContainer>
  );
});

export default PromotionBanner;
