import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getDetails, getCertification, getEpisode } from '../../store/modules/thunks/getDetailsThunks';
import { getMovie } from '../../store/modules/thunks/getMovie';
import PosterCard from '../../ui/card/DetailPoster';
import {
  DetailList,
  InfoCardContainer,
  PosterContainer,
  TextContainer,
  TextAndDetailWrapper,
  InfoOverview,
	Morebutton,
} from './style';
import Certification from './Certification';
import { getKoreanRating, countryMap } from '../../assets/api/certificationData';

const apiKey = 'VITE_API_KEY_V3';

const InfoCard = () => {
  const dispatch = useDispatch();
  const { category, detailID } = useParams();
  const { detailsData } = useSelector((state) => state.detailsR, shallowEqual);
  const { certificationData } = useSelector((state) => state.certificationsR, shallowEqual);
  const movieState = useSelector((state) => state.movieR, shallowEqual);
  const { movieData } = movieState || {};

  // “더보기” 관련 상태와 ref
  const [expanded, setExpanded] = useState(false);   
  const [overflow, setOverflow] = useState(false);   
  const overviewRef = useRef(null);                 

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: category }));
    }
    dispatch(getCertification({ id: detailID, contentType: category }));
    dispatch(getEpisode({ tvId: detailID, seasonNumber: '1' }));
    dispatch(getMovie({ category: 'base', currentPage: 1 }));

    if (detailsData && (!detailsData.created_by || detailsData.created_by.length === 0)) {
      fetch(`https://api.themoviedb.org/3/movie/${detailID}/credits?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((jsonData) => {
          const directorData = jsonData.crew.filter(({ job }) => job === 'Director');
          console.log('가져온 감독 정보:', directorData);
        })
        .catch((error) => console.error('감독 정보를 가져오는 중 오류:', error));
    }
  }, [dispatch, detailsData, detailID, category]);

  // overview 길이를 체크해 텍스트가 잘리는지 확인
  useEffect(() => {
    if (overviewRef.current) {
      const { scrollHeight, clientHeight } = overviewRef.current;
      console.log('Overview scrollHeight:', scrollHeight, 'clientHeight:', clientHeight);
      if (scrollHeight > clientHeight) {
        setOverflow(true);
      } else {
        setOverflow(false);
      }
    }
  }, [detailsData]);

  // detailsData가 아직 없다면 렌더링 중단
  if (!detailsData) return null;
  const detail = detailsData;

  // 국가 정보 처리
  const originCountryCode =
    detail.origin_country && detail.origin_country.length > 0
      ? detail.origin_country[0]
      : detail.production_countries && detail.production_countries.length > 0
      ? detail.production_countries[0].iso_3166_1
      : null;

  const originCountry = originCountryCode
    ? countryMap[originCountryCode] || '정보 없음'
    : '정보 없음';

  // 연령 등급 정보 처리
  const certificationForCountry =
    certificationData && originCountryCode
      ? certificationData.find((item) => item.iso_3166_1 === originCountryCode)
      : null;
  const certificationCode = certificationForCountry ? certificationForCountry.rating : null;
  const koreanRating = originCountryCode
    ? getKoreanRating(originCountryCode, certificationCode)
    : null;


  const movieTitle = detail.title || detail.name;
  const releaseDate = detail.release_date
    ? detail.release_date.split('-')[0]
    : detail.first_air_date
    ? detail.first_air_date.split('-')[0]
    : '연도 정보 없음';

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

          {/* 개요: -webkit-line-clamp을 위해 expanded 상태를 props로 넘김 */}
          <InfoOverview ref={overviewRef} expanded={expanded}>
            {detail.overview || '개요 정보 없음'}
          </InfoOverview>
          {!expanded && overflow && (
            <Morebutton
              onClick={() => setExpanded(true)}
            >
              더 보기
            </Morebutton>
          )}
        </TextContainer>

        <DetailList>
          <li>
            <strong style={{ marginRight: '10px' }}>개요</strong>
            {originCountry}, <span>{releaseDate}</span>
          </li>
          <li>
            <strong style={{ marginRight: '10px' }}>감독</strong>
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
         <InfoOverview>
         	   <strong style={{ marginRight: '10px' }}>출연</strong>
	            {detail.credits && detail.credits.cast && detail.credits.cast.length > 0
	              ? detail.credits.cast.map((actor, index) => (
	                  <span key={`${actor.id}-${index}`}>
	                    {actor.name}
	                    {index < detail.credits.cast.length - 1 && ', '}
	                  </span>
	                ))
	              : '출연 정보 없음'}
         </InfoOverview>    
				 {!expanded && overflow && (
            <Morebutton
              onClick={() => setExpanded(true)}
            >
              더 보기
            </Morebutton>
          )}
          </li>
          <li>
            <strong style={{ marginRight: '10px' }}>각본</strong>
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
            <strong style={{ marginRight: '10px' }}>장르</strong>
            {detail.genres && detail.genres.length > 0
              ? detail.genres.map((genre, index) => (
                  <span key={`${genre.id}-${index}`}>
                    {genre.name}
                    {index < detail.genres.length - 1 && ', '}
                  </span>
                ))
              : '장르 정보 없음'}
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <strong>연령 등급&nbsp;</strong>
            {koreanRating ? (
              <Certification
                koreanRating={koreanRating}
                style={{ width: '24px', height: '24px' }}
              />
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
