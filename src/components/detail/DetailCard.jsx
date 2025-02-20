import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { DetailContainer, FlexContainer, Title, Overview, StyledText, TitleName } from './style';
import MediaControlButtons from '../../ui/button/MediaControlButton';
import AdultsIcon from '../../ui/icon/AdultsIcon';

const DetailCard = () => {
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

  return (
    <DetailContainer>
      <div key={detail.id} style={{ marginBottom: '10px' }}>
        {/* detailtop 영역 */}
        <TitleName>
          <div>{detail.name}</div>
        </TitleName>
        <FlexContainer style={{ alignItems: 'center' }}>
          <Title>
            <span>
              {' '}
              {detail.genres && detail.genres.length > 0
                ? detail.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < detail.genres.length - 1 && ', '}
                    </span>
                  ))
                : '장르 정보 없음'}
            </span>
            ㆍ<span>{detail.first_air_date.split('-')[0]}년</span>
            {detail.adult ? (
              <AdultsIcon style={{ marginLeft: '10px' }} />
            ) : (
              <AdultsIcon style={{ marginLeft: '10px' }} />
            )}
          </Title>
        </FlexContainer>

        {/* detailmiddel 영역 */}
        <MediaControlButtons />
        <Overview>{detail.overview}</Overview>
        {/* detailbottom 영역 */}
        <StyledText style={{ marginTop: '10px' }}>
          출연:{' '}
          {detail.credits.cast.map((actor, index) => (
            <span key={actor.id}>
              {actor.name}
              {index < detail.credits.cast.length - 1 ? ', ' : ''}
            </span>
          ))}
        </StyledText>
      </div>
    </DetailContainer>
  );
};

export default DetailCard;
