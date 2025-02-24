// DramaPosterGallery.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { getRecommendations } from '../../store/modules/thunks/getRecommendations';
import { respondTo } from '../../styled/GlobalStyle';
import CardFlexList from '../../ui/card/CardFlexList';
import { getTrendingWeek } from '../../store/modules/thunks/getCommonThunks';

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

// {movieData && movieData.length > 0 ? (
// 	<div style={{ marginTop: '20px' }}>
// 		<h3>관련 영화 정보</h3>
// 		{movieData.map((movie) => (
// 			<div
// 				key={movie.id}
// 				style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
// 			>
// 				<img
// 					src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
// 					alt={movie.title}
// 					style={{ marginRight: '10px' }}
// 				/>
// 				<div>
// 					<strong>{movie.title}</strong>
// 					<p style={{ margin: 0 }}>
// 						{movie.overview
// 							? movie.overview.substring(0, 100) + '...'
// 							: '개요 정보 없음'}
// 					</p>
// 				</div>
// 			</div>
// 		))}
// 	</div>
// ) : (
// 	<p></p>
// )}
