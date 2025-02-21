import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useInfiniteScroll from './useInfiniteScroll.js';

export const useCategoryContent = ({ getData, actions, selector, dataKey, initialCategory = 'base' }) => {
  const { [dataKey]: contentData, currentCategory, loading, currentPage, hasMore } = useSelector(selector);

  const dispatch = useDispatch();
  const [prevCategory, setPrevCategory] = useState(currentCategory);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad || prevCategory !== currentCategory) {
      dispatch(getData({ category: currentCategory, currentPage: 1, prevResults: [] }));
      setPrevCategory(currentCategory);
      setIsInitialLoad(false);
    }
  }, [dispatch, currentCategory, prevCategory, isInitialLoad, getData]);

  useEffect(() => {
    return () => {
      dispatch(actions.setCategory(initialCategory));
    };
  }, [dispatch, actions, initialCategory]);

  const onCategoryClick = (categoryId) => {
    if (categoryId === currentCategory) return;
    dispatch(actions.setCategory(categoryId));
  };

  const onLoadMore = () => {
    dispatch(
      getData({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: contentData,
      })
    );
  };

  const lastElementRef = useInfiniteScroll(loading, hasMore, onLoadMore);

  return {
    contentData,
    currentCategory,
    loading,
    onCategoryClick,
    lastElementRef,
  };
};
