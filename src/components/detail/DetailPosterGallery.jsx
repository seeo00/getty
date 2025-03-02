import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getDetails, getCertification } from '../../store/modules/thunks/getDetailsThunks';
import { getMovie } from '../../store/modules/thunks/getMovie';
import { respondTo } from '../../styled/GlobalStyle';
import CardFlexList from '../../ui/card/CardFlexList';
import LoadingSpinner from '../../ui/LoadingSpinner';

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
  const dispatch = useDispatch();

  // Redux 상태에서 필요한 데이터 가져오기
  const { id, contentType } = useSelector((state) => state.detailsR);
  const { Recommendations, loading, error } = useSelector((state) => state.recommendationsR);
  const { movieRecommendations, recommendLoading: movieLoading } = useSelector((state) => state.movieR);
  const { TVRecommendData, recommendLoading: tvLoading } = useSelector((state) => state.detailsR);

  useEffect(() => {
    if (id) {
      dispatch(getDetails(id));
      dispatch(getCertification(id)); 
     
      if (contentType === 'tv') {
        dispatch(getCertification(id));
      } else if (contentType === 'movie') {
        dispatch(getMovie(id));
        dispatch(getCertification(id));
      }
    }
  }, [dispatch, id, contentType]);

  // 추천 데이터 선택
  const recommendData = Recommendations.length > 0 ? Recommendations : (contentType === 'tv' ? TVRecommendData : movieRecommendations);
  const isLoading = loading || movieLoading || tvLoading;

  if (isLoading && (!recommendData || recommendData.length === 0)) return <LoadingSpinner />;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <GalleryWrap>
      <CardFlexList items={recommendData} loading={isLoading} />
    </GalleryWrap>
  );
};

export default DramaPosterGallery;


