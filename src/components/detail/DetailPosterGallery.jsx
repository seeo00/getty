// DramaPosterGallery.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PosterCard from '../../ui/card/DetailPoster';
import { getDrama } from '../../store/modules/thunks/getDrama';
import { respondTo } from '../../styled/GlobalStyle';
import Button from '../../ui/Button';
import ArrowDownIcon from '../../ui/icon/ArrowDownIcon';

const GalleryWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 16px 0 0 0;

  ${respondTo('tabletMore')} {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 40px 0 0 0;
  }
`;

const DramaPosterGallery = () => {
  const { dramaData, currentCategory, loading, error, currentPage, hasMore } = useSelector((state) => state.dramaR);
  const dispatch = useDispatch();

  // 카테고리 변경 시 첫 페이지부터 새로 로드
  useEffect(() => {
    dispatch(getDrama({ category: currentCategory, currentPage: 1, prevResults: [] }));
  }, [dispatch, currentCategory]);

  // 버튼 클릭 시 다음 페이지 데이터 요청
  const handleLoadMore = (e) => {
    e.preventDefault();
    dispatch(
      getDrama({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: dramaData,
      })
    );
  };

  if (loading && dramaData.length === 0) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <GalleryWrap>
      {dramaData.map((item) => (
        <Link key={item.id} to={`/category/genre/${item.media_type}/${item.id}`}>
          <PosterCard posterPath={item.poster_path} />
        </Link>
      ))}
      {hasMore && (
        <Button
          width="56px"
          onClick={handleLoadMore}
          style={{
            height: '56px',
            borderRadius: '50%',
            padding: 0,
            marginTop: '16px',
            gridColumn: '1 / -1', // 그리드 중앙정렬
            justifySelf: 'center',
          }}
        >
          <ArrowDownIcon width="28" height="28" fill="white" />
        </Button>
      )}
    </GalleryWrap>
  );
};

export default DramaPosterGallery;
