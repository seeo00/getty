import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getDrama } from '../../../store/modules/thunks/getDrama';
import Contents6Item from './Contents6Item';

const Contents6List = () => {
  const { dramaData, loading, error } = useSelector((state) => state.dramaR);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dramaData.length === 0) {
      dispatch(getDrama({ category: 'base' }));
    }
  }, [dispatch, dramaData.length]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={15}
      slidesPerView={5}
      loop={true}
      pagination={{ clickable: true }}
      className="contents"
    >
      {dramaData.map((item) => (
        <SwiperSlide key={item.id}>
          <Contents6Item imgurl={`https://image.tmdb.org/t/p/w500${item.poster_path}`} desc={item.overview} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Contents6List;
