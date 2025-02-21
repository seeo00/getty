import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { color } from '../../styled/common';
import PosterCard from '../../ui/card/DetailPoster';
import { respondTo } from '../../styled/GlobalStyle';
import AdultsIcon from '../../ui/icon/AdultsIcon';
import { DetailList, InfoCardContainer, PosterContainer, TextContainer, TextAndDetailWrapper } from './style';

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
								{/* 연령 정보 */}
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

/* 
const certificationMapping = {
  US: {
    "TV-Y": "전체이용가",
    "TV-Y7": "전체이용가",
    "TV-G": "전체이용가",
    "TV-PG": "전체이용가", // 애매한 경우 전체이용가로 처리
    "TV-14": "15세 이용가", // 14세 제한 → 15세 이용가로 근사
    "TV-MA": "19세 이용가",
    "NR": "전체이용가"
  },
  KR: {
    "Exempt": "전체이용가",
    "ALL": "전체이용가",
    "7": "전체이용가",
    "12": "12세 이용가",
    "15": "15세 이용가",
    "19": "19세 이용가"
  },
  JA: {
    // 일본: 일반적으로 G, PG-12, R15+, R18+ 등 사용
    "G": "전체이용가",
    "PG-12": "12세 이용가",
    "R15+": "15세 이용가",
    "R18+": "19세 이용가"
  },
  FR: {
    "NR": "전체이용가",
    "TP": "전체이용가",
    "10": "전체이용가", // 10세 미만 권고 → 전체이용가 처리
    "12": "12세 이용가",
    "16": "15세 이용가", // 16세 권고 → 15세 이용가로 근사
    "18": "19세 이용가"
  },
  CN: {
    // 중국은 공식 인증 체계가 없으므로, 일반적인 영화 등급 체계를 가정
    "G": "전체이용가",
    "PG": "전체이용가",
    "12": "12세 이용가",
    "15": "15세 이용가",
    "18": "19세 이용가",
    "NR": "전체이용가"
  },
  CA: {
    // 캐나다(영어권)
    "Exempt": "전체이용가",
    "C": "전체이용가",
    "C8": "전체이용가",
    "G": "전체이용가",
    "PG": "전체이용가",
    "14+": "15세 이용가",
    "18+": "19세 이용가"
  },
  IN: {
    "U": "전체이용가",
    "U/A 7+": "전체이용가",
    "U/A 13+": "15세 이용가",
    "U/A 16+": "19세 이용가",
    "A": "19세 이용가"
  },
  NO: {
    "A": "전체이용가",
    "6": "전체이용가",
    "9": "전체이용가",
    "12": "12세 이용가",
    "15": "15세 이용가",
    "18": "19세 이용가"
  },
  ES: {
    "NR": "전체이용가",
    "ERI": "전체이용가",
    "TP": "전체이용가",
    "7": "전체이용가",
    "10": "전체이용가",
    "12": "12세 이용가",
    "13": "15세 이용가",
    "16": "15세 이용가",
    "18": "19세 이용가"
  },
  DE: {
    "0": "전체이용가",
    "6": "전체이용가",
    "12": "12세 이용가",
    "16": "15세 이용가",
    "18": "19세 이용가"
  },
  MX: {
    "AA": "전체이용가",
    "A": "전체이용가",
    "B": "12세 이용가",
    "B-15": "15세 이용가",
    "C": "19세 이용가",
    "D": "19세 이용가"
  },
  GB: {
    "U": "전체이용가",
    "PG": "전체이용가",
    "12A": "12세 이용가",
    "12": "12세 이용가",
    "15": "15세 이용가",
    "18": "19세 이용가",
    "R18": "19세 이용가"
  }
};

// 예시: 국가 코드와 인증 코드를 입력받아 우리나라 등급 반환
function getKoreanRating(countryCode, certificationCode) {
  const mapping = certificationMapping[countryCode];
  if (mapping && mapping[certificationCode]) {
    return mapping[certificationCode];
  }
  // 매핑 정보가 없으면 기본적으로 전체이용가로 처리
  return '전체이용가';
}

// 사용 예시
console.log(getKoreanRating('US', 'TV-PG'));  // 전체이용가
console.log(getKoreanRating('KR', '12'));     // 12세 이용가
console.log(getKoreanRating('GB', '12A'));    // 12세 이용가
console.log(getKoreanRating('MX', 'B-15'));   // 15세 이용가
 */