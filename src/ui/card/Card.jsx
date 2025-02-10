// AnimationCard.jsx
import { useEffect } from 'react';
import { CardWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { animationActions } from '../../store/modules/slices/animationSlice';
import { getDrama } from '../../store/modules/thunks/getDrama';

const AnimationCard = ({ children }) => {
  const { loading, page } = useSelector((state) => state.dramaR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrama());
  }, []);

  useEffect(() => {
    dispatch(animationActions.setLoading(true));
    const timer = setTimeout(() => {
      dispatch(animationActions.loadData());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [page]);

  const addScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!loading) {
        dispatch(animationActions.setPage(page + 1));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addScroll);
    return () => {
      window.removeEventListener('scroll', addScroll);
    };
  }, [loading, page]);

  return (
    <CardWrap>
      <div className="inner">
        <div className="header">
          <h2>Title</h2>
        </div>
        {children}
      </div>
    </CardWrap>
  );
};

export default AnimationCard;
