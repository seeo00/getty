import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
import * as S from './style';
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

	const OverviewStyled = ({ text }) => {
		const [expanded, setExpanded] = useState(false);
	
  return (
    <S.DetailContainer>
      <div key={detail.id} style={{ marginBottom: '10px' }}>
        {/* detailtop 영역 */}
        <S.TitleName>
          <div>{detail.name}</div>
        </S.TitleName>
        <S.FlexContainer style={{ alignItems: 'center' }}>
          <S.Title>
            <div className='undertitle'>
              {' '}
              {detail.genres && detail.genres.length > 0
                ? detail.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < detail.genres.length - 1 && ', '}
                    </span>
                  ))
                : '장르 정보 없음'}
            </div>
            ㆍ<div className='undertitle2'>{detail.first_air_date.split('-')[0]}년</div>
            {detail.adult ? (
              <AdultsIcon style={{ marginLeft: '10px' }} />
            ) : (
              <AdultsIcon style={{ marginLeft: '10px' }} />
            )}
          </S.Title>
        </S.FlexContainer>

        {/* detailmiddel 영역 */}
        <MediaControlButtons />
				<div className="줄거리 더보기">
          <OverviewStyled expanded={expanded}>
            {detail.overview}
          </OverviewStyled>
          <button onClick={() => setExpanded(prev => !prev)}>
            {expanded ? '숨기기' : '더 보기'}
          </button>
        </div>
        {/* detailbottom 영역 */}
        <S.StyledText style={{ marginTop: '10px' }}>
          출연:{' '}
          {detail.credits.cast.map((actor, index) => (
            <span key={actor.id}>
              {actor.name}
              {index < detail.credits.cast.length - 1 ? ', ' : ''}
            </span>
          ))}
        </S.StyledText>
      </div>
    </S.DetailContainer>
  );
};}

export default DetailCard;
