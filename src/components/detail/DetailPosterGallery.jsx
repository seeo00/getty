// DramaPosterGallery.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getRecommendations } from '../../store/modules/thunks/getRecommendations';
import { respondTo } from '../../styled/GlobalStyle';
import ContentList from '../category/CardContentList';

const GalleryWrap = styled.div`
  display: block;

  ${respondTo('tabletMore')} {
    display: block;
  }
`;

const DramaPosterGallery = () => {
  const { loading, error, recommendations = [] } = useSelector((state) => state.recommendationsR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendations({ currentPage: 1, prevResults: [] }));
  }, [dispatch]);

  if (loading && recommendations.length === 0) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <GalleryWrap>
      {recommendations.map((item) => (
        <Link key={item.id} to={`/category/genre/${item.media_type}/${item.id}`}>
          <ContentList />
        </Link>
      ))}
    </GalleryWrap>
  );
};

export default DramaPosterGallery;
