import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDrama } from '../../store/modules/thunks/getDrama';
import { color } from '../../styled/common';
import PosterCard from '../../ui/card/DetailPoster';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FlexContainer, Title, Overview, StyledText } from './style';
import { respondTo } from '../../styled/GlobalStyle';

// 전체 InfoCard 컨테이너
const InfoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`;

// 포스터 컨테이너 (고정 사이즈 114x168px)
const PosterContainer = styled.div`
  width: 114px;
  height: 168px;
  flex-shrink: 0;

  ${respondTo('tabletMore')} {
    width: 264px;
    height: 365px;
    flex-shrink: 0;
  }
  ${respondTo('laptop')} {
  }
`;

// 타이틀과 줄거리가 들어갈 컨테이너
const TextContainer = styled.div`
  flex: 1;
  color: ${color.white};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin: 0 0 8px;
  }

  p {
    margin: 0;
  }

  ${respondTo('tabletMore')} {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  ${respondTo('laptop')} {
  }
`;

// DetailCard와 추가 정보를 감싸는 컨테이너
const DetailContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  font-size: 12px;
  line-height: 11px;
  color: ${color.white};

  li {
    margin-bottom: 4px;
  }
  ${respondTo('tabletMore')} {
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
  }
  ${respondTo('laptop')} {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

// TextContainer와 DetailList를 감싸는 래퍼 컴포넌트
const TextAndDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  padding: 0 0 0 40px;

  ${respondTo('tabletMore')} {
    flex-direction: column;
    gap: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
  }
  ${respondTo('laptop')} {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
const InfoCard = () => {
  const { detailType, detailID } = useParams();
  const dispatch = useDispatch();
  const { dramaData, loading, error } = useSelector((state) => state.dramaR);

  useEffect(() => {
    if (dramaData.length === 0) {
      dispatch(getDrama({ category: 'base' }));
    }
  }, [dispatch, dramaData.length]);

  if (loading && dramaData.length === 0) return <div>로딩중...</div>;
  if (error && dramaData.length === 0) return <p>데이터를 찾을 수 없습니다.</p>;

  const drama = dramaData.find((item) => String(item.id) === detailID && item.media_type === detailType);
  if (!drama) return <p>해당 드라마를 찾을 수 없습니다.</p>;

  //데이터 없을시 폴백으로 '정보 없음'표시
  return (
    <InfoCardContainer>
      <PosterContainer>
        <PosterCard posterPath={drama.poster_path} />
      </PosterContainer>
      <TextAndDetailWrapper>
        <TextContainer>
          <h2>{drama.name}</h2>
          <p>{drama.overview}</p>
        </TextContainer>
        <DetailList>
          <li>
            <strong>개요:</strong>{' '}
            {drama.original_language === 'en'
              ? '미국'
              : drama.original_language === 'ko'
              ? '한국'
              : drama.original_language || '정보 없음'}
            , <span>{drama.first_air_date ? drama.first_air_date.split('-')[0] : ''}</span>
          </li>
          <li>
            <strong>감독:</strong> {drama.director || '정보 없음'}
          </li>
          <li>
            <strong>출연:</strong> {drama.cast || '정보 없음'}
          </li>
          <li>
            <strong>각본:</strong> {drama.writer || '정보 없음'}
          </li>
          <li>
            <strong>장르:</strong> {drama.genre || '정보 없음'}
          </li>
          <li>
            <strong>연령 등급:</strong>
            {drama.adult ? (
              <FaCheckCircle color="green" style={{ marginLeft: '10px' }} />
            ) : (
              <FaTimesCircle color="red" style={{ verticalAlign: 'middle', marginLeft: '10px' }} />
            )}
          </li>
        </DetailList>
      </TextAndDetailWrapper>
    </InfoCardContainer>
  );
};

export default InfoCard;
