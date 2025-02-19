import * as S from '../style.js';
import { SubBannerSwiper } from '../../../components';
import { InnerContainer } from '../../../common/layout/InnerContainer.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrendingWeek } from '../../../store/modules/thunks/getTrending.js';
import { getNewSeries } from '../../../store/modules/thunks/getNewSeries.js';
import BasicCardSwiper from '../../../ui/card/BasicCardSwiper.jsx';
import { getNewMovie } from '../../../store/modules/thunks/getNewMovie.js';
import { getUpcomingSeries } from '../../../store/modules/thunks/getUpcomingSeries.js';
import { getUpcomingMovie } from '../../../store/modules/thunks/getUpcomingMovie.js';

const Latest = () => {
  const { trendingWeekData, loading } = useSelector((state) => state.trendingR);
  const { upcomingSeriesData } = useSelector((state) => state.seriesR);
  const { newSeriesData } = useSelector((state) => state.seriesR);
  const { newMovieData } = useSelector((state) => state.movieR);
  const { upcomingMovieData } = useSelector((state) => state.movieR);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingWeek());
    dispatch(getNewSeries());
    dispatch(getNewMovie());
    dispatch(getUpcomingSeries());
    dispatch(getUpcomingMovie());
  }, [dispatch]);
  return (
    <>
      <SubBannerSwiper
        subTitle="최신 콘텐츠"
        title="최신 트렌트 콘텐츠"
        desc="기대를 한 몸에 받는 신작을 확인해보세요!"
        items={trendingWeekData}
        loading={loading}
      />
      <S.SectionArea>
        <InnerContainer maxWidth="1460px" className="inner">
          <BasicCardSwiper title="새로 올라온 콘텐츠" items={newSeriesData} />
          <BasicCardSwiper title="새로 올라온 영화" items={newMovieData} />
          <BasicCardSwiper title="기대되는 신규 콘텐츠" items={upcomingSeriesData} />
          <BasicCardSwiper title="공개 예정 영화" items={upcomingMovieData} />
        </InnerContainer>
      </S.SectionArea>
    </>
  );
};

export default Latest;
