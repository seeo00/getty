/* import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getDrama } from '../../store/modules/thunks/getDrama';

const Card = ({ children }) => {
  const { loading, page } = useSelector((state) => state.dramaR);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 시 초기 드라마 데이터 로드
  useEffect(() => {
    dispatch(getDrama());
  }, [dispatch]);

  // 스크롤 이벤트 핸들러 (스크롤이 페이지 하단에 도달하면 다음 페이지 데이터를 요청)
  const addScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
      if (!loading) {
        dispatch(getDrama(page + 1));
      }
    }
  };

  // 스크롤 이벤트 리스너 등록 및 해제
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

export default Card;
 */
