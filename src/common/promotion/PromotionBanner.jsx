import * as S from './style';
import Button from '../../ui/Button';
import { InnerContainer } from '../layout/InnerContainer';
import { forwardRef } from 'react';

const PromotionBanner = forwardRef(function PromotionBanner(props, ref) {
  return (
    <S.BannerContainer ref={ref}>
      <InnerContainer maxWidth={'100%'}>
        <S.FlexContainer>
          <div>
            <S.Title>구독을 시작하고 모든 콘텐츠를 무제한으로 감상해 보세요!</S.Title>
            <S.Desc>화제의 인기작부터 독점 신작까지 즐겨보세요.</S.Desc>
          </div>
          <Button $variant="outline" width={'auto'}>
            회원가입
          </Button>
        </S.FlexContainer>
      </InnerContainer>
    </S.BannerContainer>
  );
});

export default PromotionBanner;
