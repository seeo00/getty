import { useDispatch, useSelector } from 'react-redux';
import * as S from '../style.js';
import { useCallback, useEffect, useState } from 'react';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll.js';
import { getReality } from '../../../store/modules/thunks/getReality';
import { realityActions } from '../../../store/modules/slices/realitySlice';
import { CategoryButtons, ContentList } from '../../../components/index.jsx';

const Reality = () => {
  const { realityData, currentCategory, loading, error, currentPage, hasMore } = useSelector((state) => state.realityR);
  const dispatch = useDispatch();
  const [prevCategory, setPrevCategory] = useState(currentCategory);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad || prevCategory !== currentCategory) {
      dispatch(getReality({ category: currentCategory, currentPage: 1, prevResults: [] }));
      setPrevCategory(currentCategory);
      setIsInitialLoad(false);
    }
  }, [dispatch, currentCategory, prevCategory, isInitialLoad]);

  useEffect(() => {
    return () => {
      dispatch(realityActions.setCategory('base'));
    };
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === currentCategory) {
      return;
    }
    dispatch(realityActions.setCategory(categoryId));
  };

  const handleLoadMore = useCallback(() => {
    dispatch(
      getReality({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: realityData,
      })
    );
  }, [dispatch, currentCategory, currentPage, realityData]);

  const lastElementRef = useInfiniteScroll(loading, hasMore, handleLoadMore);

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'variety', name: '버라이어티' },
    { id: 'dating', name: '연애리얼리티' },
    { id: 'food', name: '음식/요리' },
    { id: 'travel', name: '여행' },
    { id: 'survival', name: '서바이벌' },
    { id: 'game', name: '게임/퀴즈' },
    { id: 'talk', name: '토크' },
  ];
  return (
    <S.GenreWrap>
      <CategoryButtons
        categories={categories}
        currentCategory={currentCategory}
        onCategoryClick={handleCategoryClick}
      />
      <ContentList data={realityData} loading={loading} lastElementRef={lastElementRef} />
    </S.GenreWrap>
  );
};

export default Reality;
