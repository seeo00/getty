import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { DetailContainer, FlexContainer, Title, StyledText, TitleName, OverviewS } from './style';
import MediaControlButtons from '../../ui/button/MediaControlButton';
import Certification from './Certification';
import { getKoreanRating } from '../../assets/api/certificationData';

const DetailCard = () => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);
  const { certificationData, loading: certificationLoading } = useSelector((state) => state.certificationsR);

  // 출연진 텍스트의 확장 여부를 위한 상태와 ref 추가
  const castRef = useRef(null);
  const [castOverflow, setCastOverflow] = useState(false);
  const [castExpanded, setCastExpanded] = useState(false);

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
  }, [dispatch, detailsData, detailID, detailType]);

  useEffect(() => {
    if (castRef.current) {
      setCastOverflow(castRef.current.scrollHeight > castRef.current.clientHeight);
    }
  }, [detailsData, castExpanded]);

  if (loading || certificationLoading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;
  if (!detailsData) return null;

  const detail = detailsData;
  const originCountryCode = detail.origin_country[0];

  const certificationForCountry = certificationData
    ? certificationData.find((item) => item.iso_3166_1 === originCountryCode)
    : null;
  const certificationCode = certificationForCountry ? certificationForCountry.rating : null;
  const koreanRating = getKoreanRating(originCountryCode, certificationCode);

  // 출연진 목록 생성
  const castContent =
    detail.credits && detail.credits.cast && detail.credits.cast.length > 0
      ? detail.credits.cast.map((actor, index) => (
          <span key={actor.id}>
            {actor.name}
            {index < detail.credits.cast.length - 1 ? ', ' : ''}
          </span>
        ))
      : '출연 정보 없음';

  return (
    <DetailContainer>
      <div key={detail.id} style={{ marginBottom: '10px' }}>
        <TitleName>
          <div>{detail.name}</div>
        </TitleName>
        <FlexContainer style={{ alignItems: 'center' }}>
          <Title>
            <div className='undertitle'>
              {detail.genres && detail.genres.length > 0
                ? detail.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < detail.genres.length - 1 && ', '}
                    </span>
                  ))
                : '장르 정보 없음'}
            </div>
            ㆍ
            <div className='undertitle2'>
              {detail.first_air_date ? detail.first_air_date.split('-')[0] : '연도 정보 없음'}년
            </div>
            {/* Certification 컴포넌트에 koreanRating 전달 */}
            <li style={{ display: 'flex' }}>
              <Certification koreanRating={`  ${koreanRating}`} />
            </li>
          </Title>
        </FlexContainer>
        <MediaControlButtons />
        <OverviewS>{detail.overview}</OverviewS>
        <div style={{ marginTop: '10px' }}>
          <StyledText ref={castRef} expanded={castExpanded}>
            출연: {castContent}
          </StyledText>
          {/* 텍스트가 overflow 되었고 아직 확장되지 않았다면 버튼 렌더링 */}
          {!castExpanded && castOverflow && (
            <button
              onClick={() => setCastExpanded(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#aaaaaa',
                cursor: 'pointer',
                padding: 0,
                marginTop: '5px'
              }}
            >
              ...더 보기
            </button>
          )}
        </div>
      </div>
    </DetailContainer>
  );
};

export default DetailCard;