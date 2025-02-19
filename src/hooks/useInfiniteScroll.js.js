import { useRef, useCallback } from 'react';

const useInfiniteScroll = (loading, hasMore, onLoadMore) => {
  const observerRef = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore, onLoadMore]
  );

  return lastElementRef;
};

export default useInfiniteScroll;
