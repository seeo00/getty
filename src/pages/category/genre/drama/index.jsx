import { useDispatch, useSelector } from 'react-redux';
import * as S from '../style';
import { useCallback, useEffect, useState } from 'react';
import { getDrama } from '../../../../store/modules/thunks/getDrama';
import { dramaActions } from '../../../../store/modules/slices/dramaSlice';
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll.js';
import { CategoryButtons, MediaContents } from '../../../../components/index.jsx';

const Drama = () => {
  const { dramaData, currentCategory, loading, error, currentPage, hasMore } = useSelector((state) => state.dramaR);
  const dispatch = useDispatch();
  const [prevCategory, setPrevCategory] = useState(currentCategory);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad || prevCategory !== currentCategory) {
      dispatch(getDrama({ category: currentCategory, currentPage: 1, prevResults: [] }));
      setPrevCategory(currentCategory);
      setIsInitialLoad(false);
    }
  }, [dispatch, currentCategory, prevCategory, isInitialLoad]);

  useEffect(() => {
    return () => {
      dispatch(dramaActions.setCategory('base'));
    };
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === currentCategory) {
      return;
    }
    dispatch(dramaActions.setCategory(categoryId));
  };

  const handleLoadMore = useCallback(() => {
    dispatch(
      getDrama({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: dramaData,
      })
    );
  }, [dispatch, currentCategory, currentPage, dramaData]);

  const lastElementRef = useInfiniteScroll(loading, hasMore, handleLoadMore);

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'romance', name: '로맨스' },
    { id: 'mystery', name: '미스터리/스릴러' },
    { id: 'fantasy', name: 'SF/판타지' },
    { id: 'crime', name: '범죄/수사' },
    { id: 'history', name: '사극/시대극' },
    { id: 'comedy', name: '코미디' },
    { id: 'youth', name: '청춘' },
    { id: 'medical', name: '의학' },
    { id: 'lawyer', name: '정치/법정' },
    { id: 'office', name: '오피스' },
    { id: 'other', name: '기타' },
  ];
  return (
    <S.GenreWrap>
      <CategoryButtons
        categories={categories}
        currentCategory={currentCategory}
        onCategoryClick={handleCategoryClick}
      />
      <MediaContents data={dramaData} loading={loading} lastElementRef={lastElementRef} />
    </S.GenreWrap>
  );
};

export default Drama;
