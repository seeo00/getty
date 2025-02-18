import { useDispatch, useSelector } from 'react-redux';
import * as S from '../style';
import { useCallback, useEffect, useState } from 'react';
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll.js';
import { getMovie } from '../../../../store/modules/thunks/getMovie';
import { movieActions } from '../../../../store/modules/slices/movieSlice';
import { CategoryButtons, MediaContents } from '../../../../components/index.jsx';

const Movie = () => {
  const { movieData, currentCategory, loading, error, currentPage, hasMore } = useSelector((state) => state.movieR);
  const dispatch = useDispatch();
  const [prevCategory, setPrevCategory] = useState(currentCategory);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad || prevCategory !== currentCategory) {
      dispatch(getMovie({ category: currentCategory, currentPage: 1, prevResults: [] }));
      setPrevCategory(currentCategory);
      setIsInitialLoad(false);
    }
  }, [dispatch, currentCategory, prevCategory, isInitialLoad]);

  useEffect(() => {
    return () => {
      dispatch(movieActions.setCategory('base'));
    };
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === currentCategory) {
      return;
    }
    dispatch(movieActions.setCategory(categoryId));
  };

  const handleLoadMore = useCallback(() => {
    dispatch(
      getMovie({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: movieData,
      })
    );
  }, [dispatch, currentCategory, currentPage, movieData]);

  const lastElementRef = useInfiniteScroll(loading, hasMore, handleLoadMore);

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'romance', name: '로맨스' },
    { id: 'comedy', name: '코미디' },
    { id: 'animation', name: '애니메이션' },
    { id: 'mystery', name: '미스터리/스릴러' },
    { id: 'adventure', name: '모험' },
    { id: 'action', name: '액션' },
    { id: 'fantasy', name: 'SF/판타지' },
    { id: 'horror', name: '공포' },
    { id: 'documentary', name: '다큐멘터리' },
    { id: 'music', name: '음악' },
    { id: 'war', name: '전쟁' },
    { id: 'crime', name: '범죄' },
    { id: 'family', name: '가족' },
    { id: 'other', name: '기타' },
  ];
  return (
    <S.GenreWrap>
      <CategoryButtons
        categories={categories}
        currentCategory={currentCategory}
        onCategoryClick={handleCategoryClick}
      />
      <MediaContents data={movieData} loading={loading} lastElementRef={lastElementRef} />
    </S.GenreWrap>
  );
};

export default Movie;
