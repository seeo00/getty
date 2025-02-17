import { useParams } from 'react-router-dom';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { color } from '../../styled/common';
import IconButton, { Button } from '../../ui/Button';
import CircleButton from '../../ui/CircleButton';
import CloseIcon from '../../ui/icon/CloseIcon';
import FavoriteIcon from '../../ui/icon/FavoriteIcon';

import VideoPlayIcon from '../../ui/icon/VideoPlayIcon';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { NavPopularIcon } from '../../ui/icon';

const Detail = () => {
  const dispatch = useDispatch();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);

  const { detailType, detailID } = useParams();
  useEffect(() => {
    dispatch(getDetails({ id: detailID, contentType: detailType }));
  }, [dispatch, detailID, detailType]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!detailsData) return null;

  return (
    <S.Overlay>
      <S.Wrap>
        <S.VisualWrap>
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
                <NavPopularIcon fill={color.yellow} color={color.yellow} />
                <span className="icon-txt">평점</span>
              </CircleButton>
            </S.ButtonControl>
          </S.VisualContent>
        </S.VisualWrap>
        <S.ButtonWrap>
          <CircleButton size="56px" bgColor={color.primary[300]}>
            <CloseIcon width={36} height={36} />
          </CircleButton>
        </S.ButtonWrap>
        <S.ContentWrap>
          <InnerContainer>ddd</InnerContainer>
        </S.ContentWrap>
      </S.Wrap>
    </S.Overlay>
  );
};

export default Detail;
