import { useDispatch, useSelector } from 'react-redux';
import * as S from '../style.js';
import { useCallback, useEffect, useState } from 'react';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll.js.js';
import { getAnimation } from '../../../store/modules/thunks/getAnimation.js';
import { animationActions } from '../../../store/modules/slices/animationSlice.js';
import { CategoryButtons, ContentList } from '../../../components/index.jsx';

const Animation = () => {
  const { animationData, currentCategory, loading, error, currentPage, hasMore } = useSelector(
    (state) => state.animationR
  );
  const dispatch = useDispatch();
  const [prevCategory, setPrevCategory] = useState(currentCategory);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad || prevCategory !== currentCategory) {
      dispatch(getAnimation({ category: currentCategory, currentPage: 1, prevResults: [] }));
      setPrevCategory(currentCategory);
      setIsInitialLoad(false);
    }
  }, [dispatch, currentCategory, prevCategory, isInitialLoad]);

  useEffect(() => {
    return () => {
      dispatch(animationActions.setCategory('base'));
    };
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === currentCategory) {
      return;
    }
    dispatch(animationActions.setCategory(categoryId));
  };

  const handleLoadMore = useCallback(() => {
    dispatch(
      getAnimation({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: animationData,
      })
    );
  }, [dispatch, currentCategory, currentPage, animationData]);

  const lastElementRef = useInfiniteScroll(loading, hasMore, handleLoadMore);

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'adventure', name: '모험/어드벤처' },
    { id: 'fantasy', name: 'SF/판타지' },
    { id: 'romance', name: '로맨스' },
    { id: 'comedy', name: '코미디' },
    { id: 'sports', name: '스포츠' },
    { id: 'mystery', name: '미스터리/스릴러' },
    { id: 'life', name: '일상/학원' },
    { id: 'kids', name: '키즈' },
    { id: 'other', name: '기타' },
  ];
  return (
    <S.GenreWrap>
      <CategoryButtons
        categories={categories}
        currentCategory={currentCategory}
        onCategoryClick={handleCategoryClick}
      />
      <ContentList data={animationData} loading={loading} lastElementRef={lastElementRef} />
    </S.GenreWrap>
  );
};

export default Animation;
