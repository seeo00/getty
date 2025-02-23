// import * as S from './style';
// import { InnerContainer } from '../../common/layout/InnerContainer';
// import { BannerSwiper, RecTextList } from '../../components';
// import CircleCardSwiper from '../../ui/card/CircleCardSwiper';
// import { useDispatch, useSelector } from 'react-redux';
// import BasicCardSwiper from '../../ui/card/BasicCardSwiper';
// import { useEffect } from 'react';
// import { getTrendingDay, getTrendingWeek } from '../../store/modules/thunks/getTrending';
// import { getCombinedMystery, getCombinedRomance } from '../../store/modules/thunks/geThunk';
// import { originalActions } from '../../store/modules/slices/originalSlice';

// const Main = () => {
//   const { originalData, originalFeatured, editorRecommend } = useSelector((state) => state.originalR);
//   const { trendingDayData, trendingWeekData } = useSelector((state) => state.trendingR);
//   const { romanceContent, mysteryContent } = useSelector((state) => state.combinedR);

//   const connectedData = originalData.filter((item) => item.type === 'connected');

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(originalActions.filterdFeature());
//     dispatch(originalActions.filteredRecommend());
//     dispatch(getTrendingDay());
//     dispatch(getTrendingWeek());
//     dispatch(getCombinedRomance());
//     dispatch(getCombinedMystery());
//   }, [dispatch]);

//   return (
//     <>
//       <BannerSwiper />
//       <S.MainContainer>
//         <InnerContainer className="inner">
//           <CircleCardSwiper title="오리지널 대표 콘텐츠" items={originalFeatured} moreLink={'/category/original'} />
//           <BasicCardSwiper title="18세기 런던, 그녀들의 세계" items={connectedData} />
//           <BasicCardSwiper title="지금 주목할 신규 콘텐츠" items={trendingWeekData} moreLink={'/category/latest'} />
//           <BasicCardSwiper title="믿고 보는 에디터 추천작" items={editorRecommend} section="editorRecommend" />
//           <BasicCardSwiper title="두근두근 로맨스" items={romanceContent.slice(0, 20)} section="romanceContent" />
//           <BasicCardSwiper title="오늘의 TOP 20" items={trendingDayData} moreLink={'/category/popular'} rank />
//           <BasicCardSwiper
//             title="긴장감 넘치는 미스터리"
//             items={mysteryContent.slice(0, 20)}
//             section="mysteryContent"
//           />
//           <RecTextList title="아직 고민 중이신가요?" />
//         </InnerContainer>
//       </S.MainContainer>
//     </>
//   );
// };

// export default Main;

import * as S from './style';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { BannerSwiper, RecTextList } from '../../components';
import CircleCardSwiper from '../../ui/card/CircleCardSwiper';
import { useDispatch, useSelector } from 'react-redux';
import BasicCardSwiper from '../../ui/card/BasicCardSwiper';
import { useEffect } from 'react';
import { getTrendingDay, getTrendingWeek } from '../../store/modules/thunks/getTrending';
import { getCombinedMystery, getCombinedRomance } from '../../store/modules/thunks/geThunk';
import { originalActions } from '../../store/modules/slices/originalSlice';
import { useOutletContext } from 'react-router-dom';

const Main = () => {
  // useOutletContext를 사용하여 Layout에서 전달받은 isCollapsed 가져오기
  const { isCollapsed } = useOutletContext() || {};

  const { originalData, originalFeatured, editorRecommend } = useSelector((state) => state.originalR);
  const { trendingDayData, trendingWeekData } = useSelector((state) => state.trendingR);
  const { romanceContent, mysteryContent } = useSelector((state) => state.combinedR);
  const connectedData = originalData.filter((item) => item.type === 'connected');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(originalActions.filterdFeature());
    dispatch(originalActions.filteredRecommend());
    dispatch(getTrendingDay());
    dispatch(getTrendingWeek());
    dispatch(getCombinedRomance());
    dispatch(getCombinedMystery());
  }, [dispatch]);

  return (
    <>
      <BannerSwiper isCollapsed={isCollapsed} />
      <S.MainContainer>
        <InnerContainer className="inner">
          <CircleCardSwiper title="오리지널 대표 콘텐츠" items={originalFeatured} moreLink={'/category/original'} />
          <BasicCardSwiper title="18세기 런던, 그녀들의 세계" items={connectedData} />
          <BasicCardSwiper title="지금 주목할 신규 콘텐츠" items={trendingWeekData} moreLink={'/category/latest'} />
          <BasicCardSwiper title="믿고 보는 에디터 추천작" items={editorRecommend} section="editorRecommend" />
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
