import * as S from './style';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { BannerSwiper, RecTextList } from '../../components';
import CircleCardSwiper from '../../ui/card/CircleCardSwiper';
import { useDispatch, useSelector } from 'react-redux';
import BasicCardSwiper from '../../ui/card/BasicCardSwiper';
import { useEffect } from 'react';
import { getTrendingDay, getTrendingWeek } from '../../store/modules/thunks/getTrending';
import { getCombinedMystery, getCombinedRomance } from '../../store/modules/thunks/geThunk';

const Main = () => {
  const { originalData } = useSelector((state) => state.originalR);
  const { trendingDayData, trendingWeekData } = useSelector((state) => state.trendingR);
  const { romanceContent, mysteryContent } = useSelector((state) => state.combinedR);

  const featuredData = originalData.filter((item) => item.logo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingDay());
    dispatch(getTrendingWeek());
    dispatch(getCombinedRomance());
    dispatch(getCombinedMystery());
  }, [dispatch]);

  return (
    <>
      <BannerSwiper />
      <S.MainContainer>
        <InnerContainer className="inner">
          <CircleCardSwiper title="오리지널 대표 콘텐츠" items={featuredData} moreLink={'/category/orginal'} />
          <BasicCardSwiper title="지금 주목할 신규 콘텐츠" items={trendingWeekData} moreLink={'category/latest'} />
          <BasicCardSwiper title="믿고 보는 에디터 추천작" />
          <BasicCardSwiper title="두근두근 로맨스" items={romanceContent.slice(0, 20)} section="romanceContent" />
          <BasicCardSwiper title="오늘의 TOP 20" items={trendingDayData} moreLink={'/category/popular'} rank />
          <BasicCardSwiper
            title="긴장감 넘치는 미스터리"
            items={mysteryContent.slice(0, 20)}
            section="mysteryContent"
          />
          <RecTextList title="아직 고민 중이신가요?" />
        </InnerContainer>
      </S.MainContainer>
    </>
  );
};

export default Main;
