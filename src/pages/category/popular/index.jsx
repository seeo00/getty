import * as S from '../style.js';
import { SubBannerSwiper } from '../../../components';
import { InnerContainer } from '../../../common/layout/InnerContainer.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrendingDay } from '../../../store/modules/thunks/getTrending.js';
import BasicCardSwiper from '../../../ui/card/BasicCardSwiper.jsx';
import { getDrama } from '../../../store/modules/thunks/getDrama.js';
import { getMovie } from '../../../store/modules/thunks/getMovie.js';
import { getReality } from '../../../store/modules/thunks/getReality.js';
import { getAnimation } from '../../../store/modules/thunks/getAnimation.js';
import { getDocumentary } from '../../../store/modules/thunks/getDocumentary.js';

const Popular = () => {
  const { trendingDayData, loading } = useSelector((state) => state.trendingR);
  const { dramaData } = useSelector((state) => state.dramaR);
  const { movieData } = useSelector((state) => state.movieR);
  const { realityData } = useSelector((state) => state.realityR);
  const { animationData } = useSelector((state) => state.animationR);
  const { documentaryData } = useSelector((state) => state.documentaryR);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingDay());
    dispatch(getDrama({ category: 'base' }));
    dispatch(getMovie({ category: 'base' }));
    dispatch(getReality({ category: 'base' }));
    dispatch(getAnimation({ category: 'base' }));
    dispatch(getDocumentary({ category: 'base' }));
  }, [dispatch]);
  return (
    <>
      <SubBannerSwiper
        subTitle="인기 콘텐츠"
        title="오늘의 게티 TOP20"
        desc="지금 가장 사랑받는 콘텐츠를 확인해보세요!"
        items={trendingDayData}
        loading={loading}
        rank
      />
      <S.SectionArea>
        <InnerContainer maxWidth="1460px" className="inner">
          <BasicCardSwiper title="실시간 인기 드라마" items={dramaData} />
          <BasicCardSwiper title="실시간 인기 영화" items={movieData} />
          <BasicCardSwiper title="실시간 인기 예능" items={realityData} />
          <BasicCardSwiper title="실시간 인기 애니" items={animationData} />
          <BasicCardSwiper title="실시간 인기 시사다큐" items={documentaryData} />
        </InnerContainer>
      </S.SectionArea>
    </>
  );
};

export default Popular;
