import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrama } from '../../../store/modules/thunks/getDrama';
import { dramaActions } from '../../../store/modules/slices/dramaSlice';
import { getDetails } from '../../../store/modules/thunks/getDetails';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Drama = () => {
  const { dramaData, currentCategory, loading, error, currentPage, hasMore } = useSelector((state) => state.dramaR);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // 카테고리가 변경될 때는 첫 페이지부터 새로 로드
    dispatch(getDrama({ category: currentCategory, currentPage: 1, prevResults: [] }));
  }, [dispatch, currentCategory]);

  const handleLoadMore = () => {
    dispatch(
      getDrama({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: dramaData,
      })
    );
  };

  if (loading && dramaData.length === 0) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;

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

  const handleContentClick = (item) => {
    dispatch(
      getDetails({
        id: item.id,
        contentType: item.media_type || 'tv',
      })
    );
    // 경로를 라우터 설정과 맞춰줌
    navigate(`/category/genre/${item.id}`);
  };

  return (
    <div>
      <div>
        {categories.map((category) => (
          <button key={category.id} onClick={() => dispatch(dramaActions.setCategory(category.id))}>
            {category.name}
          </button>
        ))}
      </div>
      <div>
        <h2>데이터출력은여기!</h2>
        <ul>
          {dramaData.map((item, index) => (
            <li key={item.id}>
              <Link to={`/category/genre/${item.media_type}/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                  width="200"
                />
                <p>{index + 1}</p>
                <p>{item.title || item.name}</p>
                <p>{item.overview}</p>
                <p>{item.media_type}</p>
              </Link>
            </li>
          ))}
        </ul>
        {loading && <p>더 불러오는 중...</p>}
        {hasMore && !loading && <button onClick={handleLoadMore}>더보기</button>}
      </div>
      {/* Detail 컴포넌트가 여기에 렌더링됨 */}
      <Outlet />
    </div>
  );
};

export default Drama;
