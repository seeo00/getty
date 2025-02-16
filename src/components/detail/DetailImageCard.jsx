import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { Container, FlexContainer, Image } from './style';

const DetailImageCard = () => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
  }, [dispatch, detailsData, detailID, detailType]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;
  if (!detailsData) return null;

  const detail = detailsData;
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <Container>
      <FlexContainer>
        <Image src={`${imageBaseUrl}${detail.poster_path}`} alt={detail.title || detail.name || '에피소드 이미지'} />
      </FlexContainer>
    </Container>
  );
};

export default DetailImageCard;
