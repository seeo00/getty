import { useParams, useNavigate } from 'react-router-dom';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { color } from '../../styled/common';
import { Button } from '../../ui/Button';
import CircleButton from '../../ui/CircleButton';
import CloseIcon from '../../ui/icon/CloseIcon';
import FavoriteIcon from '../../ui/icon/FavoriteIcon';
import NavPopluarIcon from '../../ui/icon/NavPopluarIcon';
import VideoPlayIcon from '../../ui/icon/VideoPlayIcon';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetails } from '../../store/modules/thunks/getDetails';
import DetailTabButtons from '../../ui/button/TapButton';
import DetailCard from '../../components/detail/DetailCard';
import styled from 'styled-components';
// 수정한 Thumbnail 컴포넌트를 불러옵니다.
import Thumbnail from '../../ui/card/Thumbnail';
import SeasonDropdown from '../../ui/button/DropdownSelectButton';

export const VisualWrap = styled.div`
  position: relative;
  height: 60%;
  background-color: #555;
  overflow-y: hidden;
`;

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);

  const { detailType, detailID } = useParams();
  useEffect(() => {
    dispatch(getDetails({ id: detailID, contentType: detailType }));
  }, [dispatch, detailID, detailType]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!detailsData) return null;

  //시즌 데이터 필요
  const seasonList = ['시즌 1', '시즌 2', '시즌 3'];

  return (
    <S.Overlay>
      <S.Wrap>
        <VisualWrap>
          <Thumbnail posterPath={detailsData.poster_path} full />
          <S.VisualContent>
            <S.TitleImg>{detailsData.name}</S.TitleImg>
            <S.ButtonControl>
              <Button width="120px">
                <VideoPlayIcon color={color.white} />
                재생
              </Button>
              <CircleButton border>
                <FavoriteIcon />
                <span className="icon-txt">관심</span>
              </CircleButton>
              <CircleButton border>
                <NavPopluarIcon fill={color.yellow} color={color.yellow} />
                <span className="icon-txt">평점</span>
              </CircleButton>
            </S.ButtonControl>
          </S.VisualContent>
        </VisualWrap>
        <S.ButtonWrap onClick={() => navigate('/category/genre')}>
          <CircleButton size="56px" bgColor={color.primary[300]}>
            <CloseIcon width={36} height={36} />
          </CircleButton>
        </S.ButtonWrap>
        <S.ContentWrap>
          <InnerContainer>
            <DetailCard />
            <SeasonDropdown
              seasons={seasonList}
              defaultSeason={seasonList[0]}
              onSelect={(season) => console.log(season)}
            />
            <DetailTabButtons />
          </InnerContainer>
        </S.ContentWrap>
      </S.Wrap>
    </S.Overlay>
  );
};

export default Detail;
