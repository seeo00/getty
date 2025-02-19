import { useRef, useState, useEffect } from 'react';

const useMouseDragScroll = () => {
  const ref = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseDown = (e) => {
      setIsDown(true);
      element.style.cursor = 'grabbing';
      setStartX(e.pageX - element.offsetLeft);
      setScrollLeft(element.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDown(false);
      element.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      setIsDown(false);
      element.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2; // 스크롤 속도 조절
      element.scrollLeft = scrollLeft - walk;
    };

    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseup', handleMouseUp);
    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseup', handleMouseUp);
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDown, startX, scrollLeft]);

  return ref;
};

export default useMouseDragScroll;
