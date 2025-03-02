import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetailsThunks';
import { getCertification } from '../../store/modules/thunks/getDetailsThunks';
import { DetailContainer, FlexContainer, Title, StyledText, TitleName, OverviewS } from './style';
import Certification from './Certification';
import { getKoreanRating } from '../../assets/api/certificationData';
import MediaControlButtons from './MediaControlButton';

const DetailCard = () => {
  const dispatch = useDispatch();
  const { category, detailID } = useParams();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);
  const { certificationData, loading: certificationLoading } = useSelector((state) => state.certificationsR);

  const detail = detailsData;
  const movieTitle = detail ? (detail.title || detail.name) : '';

  const castRef = useRef(null);
  const [castOverflow, setCastOverflow] = useState(false);
  const [castExpanded, setCastExpanded] = useState(false);

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: category }));
    }
    // 올바른 파라미터 전달: { id, contentType }
    dispatch(getCertification({ id: detailID, contentType: category }));
  }, [dispatch, detailsData, detailID, category]);

  useEffect(() => {
    if (castRef.current) {
      setCastOverflow(castRef.current.scrollHeight > castRef.current.clientHeight);
    }
  }, [detailsData, castExpanded]);

  if (loading || certificationLoading) return null;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;
  if (!detailsData) return null;

  const originCountryCode = detail.origin_country[0];

  const certificationForCountry = certificationData
    ? certificationData.find((item) => item.iso_3166_1 === originCountryCode)
    : null;
  const certificationCode = certificationForCountry ? certificationForCountry.rating : null;
  const koreanRating = getKoreanRating(originCountryCode, certificationCode);

  const castContent =
    detail.credits && detail.credits.cast && detail.credits.cast.length > 0
      ? detail.credits.cast.map((actor, index) => (
          <span key={actor.id}>
            {actor.name}
            {index < detail.credits.cast.length - 1 ? ', ' : ''}
          </span>
        ))
      : '출연 정보 없음';

  const releaseDate = detail.release_date
    ? detail.release_date.split('-')[0]
    : detail.first_air_date
    ? detail.first_air_date.split('-')[0]
    : '연도 정보 없음';

  return (
    <DetailContainer>
      <div key={detail.id} style={{ marginBottom: '10px' }}>
        <TitleName>
          <div>{movieTitle}</div>
        </TitleName>
        <FlexContainer style={{ alignItems: 'center' }}>
          <Title>
            <div className="undertitle">
              {detail.genres && detail.genres.length > 0
                ? detail.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < detail.genres.length - 1 && ', '}
                    </span>
                  ))
                : '장르 정보 없음'}
            </div>
            ㆍ<div className="undertitle2">{releaseDate}년</div>
            <li style={{ display: 'flex' }}>
              {koreanRating ? <Certification koreanRating={koreanRating} /> : '연령 등급 정보 없음'}
            </li>
          </Title>
        </FlexContainer>
        <MediaControlButtons />
        <OverviewS>{detail.overview}</OverviewS>
        <div style={{ marginTop: '10px' }}>
          <StyledText ref={castRef} expanded={castExpanded}>
            출연 : {castContent}
          </StyledText>
          {!castExpanded && castOverflow && (
            <button
              onClick={() => setCastExpanded(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#8D8D8D',
                cursor: 'pointer',
                padding: 0,
                marginTop: '3px',
                fontSize: '14px',
              }}
            >
              더 보기
            </button>
          )}
        </div>
      </div>
    </DetailContainer>
  );
};

export default DetailCard;
