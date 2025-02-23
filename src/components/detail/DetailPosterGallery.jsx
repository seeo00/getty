// DramaPosterGallery.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTrendingWeek } from '../../store/modules/thunks/getTrending';
import { respondTo } from '../../styled/GlobalStyle';
import CardFlexList from '../../ui/card/CardFlexList';

const GalleryWrap = styled.div`
margin: 16px 0 0 0;
  display: block;

  ${respondTo('desktop')} {
    display: block;
		margin: 40px 0 0 0;
  }

  ${respondTo('tablet')} {
    display: block;
		margin: 16px 0 0 0;
  }

  ${respondTo('mobile')} {
    display: block;
		margin: 16px 0 0 0;
  }
`;

const DramaPosterGallery = () => {
  // trendingData 대신 trendingWeekData를 사용합니다.
  const { loading, error, trendingWeekData } = useSelector((state) => state.trendingR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingWeek());
  }, [dispatch]);

  if (loading && (!trendingWeekData || trendingWeekData.length === 0)) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <GalleryWrap>
      <CardFlexList gridType="fourColumn" items={trendingWeekData} loading={loading} />
    </GalleryWrap>
  );
};

export default DramaPosterGallery;
