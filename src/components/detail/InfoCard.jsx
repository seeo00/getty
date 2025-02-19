import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { color } from '../../styled/common';
import PosterCard from '../../ui/card/DetailPoster';
import { respondTo } from '../../styled/GlobalStyle';
import AdultsIcon from '../../ui/icon/AdultsIcon';

// 전체 InfoCard 컨테이너
const InfoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    align-items: flex-start;
    flex-direction: row; /* 데스크탑: 원래 순서 */
  }
`;
// 포스터 컨테이너 (고정 사이즈 114x168px)
const PosterContainer = styled.div`
  width: 114px;
  height: 168px;
  flex-shrink: 0;

  ${respondTo('laptop')} {
    width: 264px;
    height: 365px;
    flex-shrink: 0;
  }
  ${respondTo('mobile')} {
    width: 114px;
    height: 168px;
    flex-shrink: 0;
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
  const countryMap = {
    US: '미국',
    KR: '한국',
    JA: '일본',
    FR: '프랑스',
    CN: '중국',
    CA: '캐나다',
    IN: '인도',
    NO: '노르웨이',
    ES: '스페인',
    DE: '독일',
    MX: '멕시코',
    GB: '영국',
  };

  const originCountry = countryMap[detail.origin_country[0]] || '정보 없음';

  return (
    <InfoCardContainer key={detail.id}>
      <PosterContainer>
        <PosterCard posterPath={detail.poster_path} />
      </PosterContainer>
      <TextAndDetailWrapper>
        <TextContainer>
          <h2>{detail.name}</h2>
          <p>{detail.overview}</p>
        </TextContainer>
        <DetailList>
          <li>
            <strong>개요:</strong> {originCountry},{' '}
            <span>{detail.first_air_date ? detail.first_air_date.split('-')[0] : ''}</span>
          </li>
          <li>
            <strong>감독:</strong>{' '}
            {detail.created_by.map((director, index) => (
              <span key={director.id}>
                {director.name}
                {index < detail.created_by.length - 1 && ', '}
              </span>
            ))}
          </li>
          <li>
            <strong>출연:</strong>{' '}
            {detail.credits.cast.map((actor, index) => (
              <span key={actor.id}>
                {actor.name}
                {index < detail.credits.cast.length - 1 && ', '}
              </span>
            ))}
          </li>
          <li>
            <strong>각본:</strong>{' '}
            {detail.created_by.map((writer, index) => (
              <span key={writer.id}>
                {writer.name}
                {index < detail.created_by.length - 1 && ', '}
              </span>
            ))}
          </li>
          <li>
            <strong>장르:</strong>{' '}
            {detail.genres && detail.genres.length > 0
              ? detail.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index < detail.genres.length - 1 && ', '}
                  </span>
                ))
              : '장르 정보 없음'}
          </li>
          <li style={{ alignItems: 'center' }}>
            <strong>연령 등급:</strong>
            {detail.adult ? (
              <AdultsIcon style={{ marginLeft: '10px' }} />
            ) : (
              <AdultsIcon style={{ marginLeft: '10px' }} />
            )}
          </li>
        </DetailList>
      </TextAndDetailWrapper>
    </InfoCardContainer>
  );
};

export default InfoCard;
