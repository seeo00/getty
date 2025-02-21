import * as S from '../style.js';
import { useDispatch, useSelector } from 'react-redux';
import { SubBannerSwiper } from '../../../components';
import { InnerContainer } from '../../../common/layout/InnerContainer';
import BasicCardSwiper from '../../../ui/card/BasicCardSwiper';
import { useEffect } from 'react';
import { originalActions } from '../../../store/modules/slices/originalSlice.js';

const Original = () => {
  const { originalFeatured, originalKoreanSeries, originalGlobalSeries, originalTopRated, originalMovies } =
    useSelector((state) => state.originalR);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(originalActions.sortedTopRated());
    dispatch(originalActions.filterdFeature());
    dispatch(originalActions.filteredKoreanSeries());
    dispatch(originalActions.filteredGlobalSeries());
    dispatch(originalActions.filteredMovies());
  }, [dispatch]);

  return (
    <>
      <SubBannerSwiper
        subTitle="오리지널 콘텐츠"
        title="오직 게티에서만"
        desc="오리지널 독점 콘텐츠를 확인해 보세요!"
        items={originalFeatured}
      />
      <S.SubContainer>
        <InnerContainer className="inner">
          <BasicCardSwiper
            title="믿고 보는 오리지널 추천작"
            items={originalTopRated.slice(0, 20)}
            section="originalTopRated"
          />
          <BasicCardSwiper
            title="오리지널 시리즈"
            items={originalKoreanSeries.slice(0, 20)}
            section="originalKoreanSeries"
          />
          <BasicCardSwiper
            title="해외 시리즈도 게티에서"
            items={originalGlobalSeries.slice(0, 20)}
            section="originalGlobalSeries"
          />
          <BasicCardSwiper title="독점 영화" items={originalMovies.slice(0, 20)} section="originalMovies" />
        </InnerContainer>
      </S.SubContainer>
    </>
  );
};

export default Original;
