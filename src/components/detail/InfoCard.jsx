import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { getCertification } from '../../store/modules/thunks/getCertification';
import { getEpisode } from '../../store/modules/thunks/getEpisode';
import { getMovie } from '../../store/modules/thunks/getMovie';
import PosterCard from '../../ui/card/DetailPoster';
import {
  DetailList,
  InfoCardContainer,
  PosterContainer,
  TextContainer,
  TextAndDetailWrapper,
} from './style';
import Certification from './Certification';
import { getKoreanRating, countryMap } from '../../assets/api/certificationData';

// apiKey를 상수로 선언하거나, 환경변수 등으로 관리
const apiKey = 'VITE_API_KEY_V3';

const InfoCard = () => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();

  const { detailsData, loading, error } = useSelector(
    (state) => state.detailsR,
    shallowEqual
  );
  const { certificationData, loading: certificationLoading } = useSelector(
    (state) => state.certificationsR,
    shallowEqual
  );
  const movieState = useSelector((state) => state.movieR, shallowEqual);
  const { movieData, loading: movieLoading, error: movieError } = movieState || {};

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
    dispatch(getCertification({ tvId: detailID }));
    dispatch(getEpisode({ tvId: detailID, seasonNumber: '1' }));
    dispatch(getMovie({ category: 'base', currentPage: 1 }));

    // 감독 정보가 없을 경우 credits API 호출
    if (detailsData && (!detailsData.created_by || detailsData.created_by.length === 0)) {
      fetch(`https://api.themoviedb.org/3/movie/${detailID}/credits?api_key=${apiKey}`)
        .then(response => response.json())
        .then(jsonData => {
          const directorData = jsonData.crew.filter(({ job }) => job === 'Director');
          console.log('가져온 감독 정보:', directorData);
          // 필요에 따라 directorData를 전역 상태 또는 로컬 상태에 저장
        })
        .catch(error => console.error('감독 정보를 가져오는 중 오류:', error));
    }
  }, [dispatch, detailsData, detailID, detailType]);

  // detailsData가 없으면 렌더링 중단
  if (!detailsData) return null;

  const detail = detailsData;

  // originCountryCode 검증: origin_country가 있으면 첫 번째, 없으면 production_countries에서 가져옴
  const originCountryCode =
    detail.origin_country && detail.origin_country.length > 0
      ? detail.origin_country[0]
      : detail.production_countries && detail.production_countries.length > 0
      ? detail.production_countries[0].iso_3166_1
      : null;

  const originCountry = originCountryCode
    ? countryMap[originCountryCode] || '정보 없음'
    : '정보 없음';

  const certificationForCountry =
    certificationData && originCountryCode
      ? certificationData.find((item) => item.iso_3166_1 === originCountryCode)
      : null;

  const certificationCode = certificationForCountry ? certificationForCountry.rating : null;
  const koreanRating = originCountryCode ? getKoreanRating(originCountryCode, certificationCode) : null;

  const movieTitle = detail.title || detail.name;
  const releaseDate = detail.release_date
    ? detail.release_date.split('-')[0]
    : detail.first_air_date
    ? detail.first_air_date.split('-')[0]
    : '연도 정보 없음';

  const country = originCountry;

  const directors =
    detail.created_by && detail.created_by.length > 0
      ? detail.created_by
      : detail.credits && detail.credits.crew
      ? detail.credits.crew.filter((person) => person.job === 'Director')
      : [];
  const writers =
    detail.created_by && detail.created_by.length > 0
      ? detail.created_by
      : detail.credits && detail.credits.crew
      ? detail.credits.crew.filter(
          (person) => person.job === 'Screenplay' || person.job === 'Writer'
        )
      : [];

  return (
    <InfoCardContainer key={detail.id}>
      <PosterContainer>
        <PosterCard posterPath={detail.poster_path} />
      </PosterContainer>
      <TextAndDetailWrapper>
        <TextContainer>
          <h2>{movieTitle || '제목 정보 없음'}</h2>
          <p>{detail.overview || '개요 정보 없음'}</p>
        </TextContainer>
        <DetailList>
          <li>
            <strong>개요 :</strong>{' '}
            {country ? country : '개요 정보 없음'},{' '}
            <span>{releaseDate}</span>
          </li>
          <li>
            <strong>감독 :</strong>{' '}
            {directors.length > 0
              ? directors.map((director, index) => (
                  <span key={`${director.id}-${index}`}>
                    {director.name}
                    {index < directors.length - 1 && ', '}
                  </span>
                ))
              : '감독 정보 없음'}
          </li>
          <li>
            <strong>출연 :</strong>{' '}
            {detail.credits &&
            detail.credits.cast &&
            detail.credits.cast.length > 0
              ? detail.credits.cast.map((actor, index) => (
                  <span key={`${actor.id}-${index}`}>
                    {actor.name}
                    {index < detail.credits.cast.length - 1 && ', '}
                  </span>
                ))
              : '출연 정보 없음'}
          </li>
          <li>
            <strong>각본 :</strong>{' '}
            {writers.length > 0
              ? writers.map((writer, index) => (
                  <span key={`${writer.id}-${index}`}>
                    {writer.name}
                    {index < writers.length - 1 && ', '}
                  </span>
                ))
              : '각본 정보 없음'}
          </li>
          <li>
            <strong>장르 :</strong>{' '}
            {detail.genres && detail.genres.length > 0
              ? detail.genres.map((genre, index) => (
                  <span key={`${genre.id}-${index}`}>
                    {genre.name}
                    {index < detail.genres.length - 1 && ', '}
                  </span>
                ))
              : '장르 정보 없음'}
          </li>
          <li style={{ display: 'flex' }}>
            <span>
              <strong>연령 등급 :</strong>{' '}
            </span>
            {koreanRating ? (
              <Certification koreanRating={koreanRating} />
            ) : (
              '연령 등급 정보 없음'
            )}
          </li>
        </DetailList>
      </TextAndDetailWrapper>
    </InfoCardContainer>
  );
};

export default InfoCard;
