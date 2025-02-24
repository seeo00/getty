// InfoCard.jsx
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetailsThunks';
import { getCertification } from '../../store/modules/thunks/getDetailsThunks';
import { getEpisode } from '../../store/modules/thunks/getDetailsThunks';
import PosterCard from './DetailPoster';
import { DetailList, InfoCardContainer, PosterContainer, TextContainer, TextAndDetailWrapper } from './style';
import Certification from './Certification';
import { getKoreanRating, countryMap } from '../../assets/api/certificationData';

const InfoCard = () => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);
  const { certificationData, loading: certificationLoading } = useSelector((state) => state.certificationsR);
  const { loading: episodeLoading, error: episodeError } = useSelector((state) => state.episodeR);

  useEffect(() => {
    if (!detailsData) {
      console.log('detailID:', detailID);
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
    dispatch(getCertification({ tvId: detailID }));
    dispatch(getEpisode({ tvId: detailID, seasonNumber: '1' }));
  }, [dispatch, detailsData, detailID, detailType]);

  if (loading || certificationLoading || episodeLoading) return <p>로딩 중...</p>;
  if (error || episodeError) return <p>데이터를 찾을 수 없습니다.</p>;
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
          <li style={{ display: 'flex' }}>
            <span>
              <strong>연령 등급:</strong>{' '}
            </span>
            <Certification koreanRating={koreanRating} />
          </li>
        </DetailList>
      </TextAndDetailWrapper>
    </InfoCardContainer>
  );
};

export default InfoCard;
