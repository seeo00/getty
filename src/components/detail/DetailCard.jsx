import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDrama } from '../../store/modules/thunks/getDrama';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { DetailContainer, FlexContainer, Title, Overview, StyledText } from './style'; // 실제 경로에 맞게 수정하세요

const DetailCard = () => {
  const { detailType, detailID } = useParams();
  const { dramaData, loading, error } = useSelector((state) => state.dramaR);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dramaData.length === 0) {
      dispatch(getDrama({ category: 'base' }));
    }
  }, [dispatch, dramaData.length]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;

  const drama = dramaData.find((item) => String(item.id) === detailID && item.media_type === detailType);
  if (!drama) return <p>해당 드라마를 찾을 수 없습니다.</p>;

  return (
    <DetailContainer>
      <div key={drama.id} style={{ padding: '10px', marginBottom: '10px' }}>
        {/* detailtop 영역 */}
        <FlexContainer>
          <Title>
            <span>{drama.genre_ids && drama.genre_ids}</span>
            <span style={{ marginLeft: '10px' }}>{drama.first_air_date.split('-')[0]}</span>
            {drama.adult ? (
              <FaCheckCircle color="green" style={{ marginLeft: '10px' }} />
            ) : (
              <FaTimesCircle color="red" style={{ marginLeft: '10px' }} />
            )}
          </Title>
        </FlexContainer>

        {/* detailmiddel 영역 */}
        <Overview>{drama.overview}</Overview>

        {/* detailbottom 영역 */}
        <StyledText style={{ marginTop: '10px' }}>출연: {drama.person || ''}</StyledText>
      </div>
    </DetailContainer>
  );
};

export default DetailCard;
