import { useDispatch, useSelector } from 'react-redux';
import * as S from '../style';
import { useCallback, useEffect, useState } from 'react';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll.js.js';
import { getDocumentary } from '../../../store/modules/thunks/getDocumentary.js';
import { documentaryActions } from '../../../store/modules/slices/documentarySlice.js';
import { CategoryButtons, ContentList } from '../../../components/index.jsx';

const Documentary = () => {
  const { documentaryData, currentCategory, loading, error, currentPage, hasMore } = useSelector(
    (state) => state.documentaryR
  );
  const dispatch = useDispatch();
  const [prevCategory, setPrevCategory] = useState(currentCategory);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad || prevCategory !== currentCategory) {
      dispatch(getDocumentary({ category: currentCategory, currentPage: 1, prevResults: [] }));
      setPrevCategory(currentCategory);
      setIsInitialLoad(false);
    }
  }, [dispatch, currentCategory, prevCategory, isInitialLoad]);

  useEffect(() => {
    return () => {
      dispatch(documentaryActions.setCategory('base'));
    };
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === currentCategory) {
      return;
    }
    dispatch(documentaryActions.setCategory(categoryId));
  };

  const handleLoadMore = useCallback(() => {
    dispatch(
      getDocumentary({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: documentaryData,
      })
    );
  }, [dispatch, currentCategory, currentPage, documentaryData]);

  const lastElementRef = useInfiniteScroll(loading, hasMore, handleLoadMore);

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'news', name: '시사' },
    { id: 'drama', name: '드라마' },
    { id: 'history', name: '역사/전쟁' },
    { id: 'nature', name: '환경/자연' },
    { id: 'crime', name: '범죄/실화' },
    { id: 'life', name: '라이프' },
    { id: 'sports', name: '스포츠' },
    // { id: 'other', name: '기타' },
  ];
  return (
    <S.GenreWrap>
      <CategoryButtons
        categories={categories}
        currentCategory={currentCategory}
        onCategoryClick={handleCategoryClick}
      />
      <ContentList data={documentaryData} loading={loading} lastElementRef={lastElementRef} />
    </S.GenreWrap>
  );
};

export default Documentary;
