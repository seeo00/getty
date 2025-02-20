import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
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
        {/* detail top 영역 */}
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
            {/* detail.adult 조건은 두 경우 모두 동일하므로 조건문 제거 */}
            <AdultsIcon style={{ marginLeft: '10px' }} />
          </Title>
        </FlexContainer>

        {/* detail middle 영역 */}
        <MediaControlButtons />
        <Overview>{detail.overview}</Overview>
        {/* detail bottom 영역 */}
        <StyledText style={{ marginTop: '10px' }}>
          출연:{' '}
          {detail.credits && detail.credits.cast && detail.credits.cast.length > 0
            ? detail.credits.cast.map((actor, index) => (
                <span key={actor.id}>
                  {actor.name}
                  {index < detail.credits.cast.length - 1 ? ', ' : ''}
                </span>
              ))
            : '출연 정보 없음'}
        </StyledText>
      </div>
    </DetailContainer>
  );
};

export default DetailCard;
