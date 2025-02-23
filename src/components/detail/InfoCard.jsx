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

const InfoCard = () => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();

  // shallowEqual 사용 및 기본값 제거
  const { detailsData, loading, error } = useSelector(
    (state) => state.detailsR,
    shallowEqual
  );
  const { certificationData, loading: certificationLoading } = useSelector(
    (state) => state.certificationsR,
    shallowEqual
  );
  const { loading: episodeLoading, error: episodeError } = useSelector(
    (state) => state.episodeR,
    shallowEqual
  );
  const movieState = useSelector((state) => state.movie, shallowEqual);
  const { movieData, loading: movieLoading, error: movieError } = movieState || {};

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
    dispatch(getCertification({ tvId: detailID }));
    dispatch(getEpisode({ tvId: detailID, seasonNumber: '1' }));
    // getMovie 정보도 불러옴
    dispatch(getMovie({ category: 'base', currentPage: 1 }));
  }, [dispatch, detailsData, detailID, detailType]);

  if (loading || certificationLoading || episodeLoading || movieLoading)
    return <p>로딩 중...</p>;
  if (error || episodeError || movieError) return <p>데이터를 찾을 수 없습니다.</p>;
  if (!detailsData) return null;

  const detail = detailsData;
  const originCountryCode = detail.origin_country[0];
  const originCountry = countryMap[originCountryCode] || '정보 없음';

  // certificationData 예시: [{ iso_3166_1: "US", rating: "TV-MA" }, { iso_3166_1: "KR", rating: "" }, ...]
  const certificationForCountry = certificationData
    ? certificationData.find((item) => item.iso_3166_1 === originCountryCode)
    : null;
  const certificationCode = certificationForCountry ? certificationForCountry.rating : null;
  const koreanRating = getKoreanRating(originCountryCode, certificationCode);
  const movieTitle = detail.title || detail.name;
  const releaseDate = detail.release_date
    ? detail.release_date.split('-')[0]
    : detail.first_air_date
    ? detail.first_air_date.split('-')[0]
    : '연도 정보 없음';

		
		

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
            <strong>개요:</strong>{' '}
            {originCountry ? originCountry : '개요 정보 없음'},{' '}
            <span>{releaseDate ? releaseDate : '출시일 정보 없음'}</span>
          </li>
          <li>
            <strong>감독:</strong>{' '}
            {detail.created_by && detail.created_by.length > 0
              ? detail.created_by.map((director, index) => (
                  <span key={`${director.id}-${index}`}>
                    {director.name}
                    {index < detail.created_by.length - 1 && ', '}
                  </span>
                ))
              : '감독 정보 없음'}
          </li>
          <li>
            <strong>출연:</strong>{' '}
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
            <strong>각본:</strong>{' '}
            {detail.created_by && detail.created_by.length > 0
              ? detail.created_by.map((writer, index) => (
                  <span key={`${writer.id}-${index}`}>
                    {writer.name}
                    {index < detail.created_by.length - 1 && ', '}
                  </span>
                ))
              : '각본 정보 없음'}
          </li>
          <li>
            <strong>장르:</strong>{' '}
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
              <strong>연령 등급:</strong>{' '}
            </span>
            {koreanRating ? (
              <Certification koreanRating={koreanRating} />
            ) : (
              '연령 등급 정보 없음'
            )}
          </li>
        </DetailList>
        {/* getMovie로 받아온 영화 데이터를 추가 섹션으로 렌더링 */}
        {movieData && movieData.length > 0 ? (
          <div style={{ marginTop: '20px' }}>
            <h3>관련 영화 정보</h3>
            {movieData.map((movie) => (
              <div
                key={movie.id}
                style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  style={{ marginRight: '10px' }}
                />
                <div>
                  <strong>{movie.title}</strong>
                  <p style={{ margin: 0 }}>
                    {movie.overview
                      ? movie.overview.substring(0, 100) + '...'
                      : '개요 정보 없음'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </TextAndDetailWrapper>
    </InfoCardContainer>
  );
};

export default InfoCard;
