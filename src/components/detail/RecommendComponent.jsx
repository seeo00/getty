import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendations } from '../../store/modules/thunks/getDetailsThunks';
import { useParams } from 'react-router-dom';

const RecommendComponent = () => {
  const dispatch = useDispatch();
  const { category, detailID } = useParams();
  // slice의 초기 상태에서 'Recommendations', 'loading', 'error' 프로퍼티를 사용
  const { Recommendations, loading, error } = useSelector(state => state.recommendationsR);

	useEffect(() => {
		// type과 id를 포함한 객체를 인자로 전달
		dispatch(getRecommendations({ id: detailID, contentType: category}));
	}, [dispatch]);
	

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  // 영화는 title, 드라마는 name 속성이 있다고 가정
  const movieRecommendations = Recommendations.filter(item => item.title);
  const tvRecommendations = Recommendations.filter(item => item.name);

  return (
    <div>
      {movieRecommendations.length > 0 ? (
        <>
          <h1>추천 영화 목록</h1>
          <ul>
            {movieRecommendations.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </>
      ) : tvRecommendations.length > 0 ? (
        <>
          <h1>추천 드라마 목록</h1>
          <ul>
            {tvRecommendations.map(tv => (
              <li key={tv.id}>{tv.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>추천 목록이 없습니다.</p>
      )}
    </div>
  );
};

export default RecommendComponent;
