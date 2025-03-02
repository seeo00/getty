// Detail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { color } from '../../styled/common';
import CircleButton from '../../ui/button/CircleButton';
import CloseIcon from '../../ui/icon/CloseIcon';
import FavoriteIcon from '../../ui/icon/FavoriteIcon';
import VideoPlayIcon from '../../ui/icon/VideoPlayIcon';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDetails } from '../../store/modules/thunks/getDetailsThunks';
import { NavPopularIcon } from '../../ui/icon';
import Thumbnail from '../../components/detail/Thumbnail';
import DetailCard from '../../components/detail/DetailCard';
import DetailTabButtons from '../../components/detail/TapButton';
import LoadingSpinner from '../../ui/LoadingSpinner';
import DetailTrailer from '../../components/detail/DetailTrailer';
import Button from '../../ui/button/Button';
// import DetailImageCard from '../../components/detail/DetailImageCard';

const Detail = () => {
  const { authed, user } = useSelector((state) => state.authR);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);
  const { category, detailID } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);

  const handlePlayClick = () => {
    const videoKey = detailsData?.videos?.results?.find(
      (video) => video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser')
    )?.key;

    if (videoKey) {
      setShowTrailer(true);
    } else {
      setShowTrailer(true);
    }
  };

  useEffect(() => {
    if (!category || !detailID) return;
    dispatch(getDetails({ id: detailID, contentType: category }));
  }, [dispatch, detailID, category]);

  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      // document.body.style.overflow = 'auto';
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!detailsData) return null;

  return (
    <>
      <S.Overlay>
        <S.Wrap>
          <S.VisualWrap>
            <Thumbnail backdropPath={detailsData.backdrop_path} full />
            <S.VisualContent>
              <S.TitleImg>{detailsData.name || detailsData.title}</S.TitleImg>
              <S.ButtonControl>
                {!authed ? (
                  <Button width="auto" onClick={() => navigate('/auth')}>
                    <VideoPlayIcon color={color.white} />
                    로그인
                  </Button>
                ) : !user.subscriptionPlan ? (
                  <Button width="auto" onClick={() => navigate('/subscription')}>
                    <VideoPlayIcon color={color.white} />
                    이용권 구독
                  </Button>
                ) : (
                  <Button width="auto" onClick={handlePlayClick} onClickCapture={(e) => e.preventDefault()}>
                    <VideoPlayIcon color={color.white} />
                    재생
                  </Button>
                )}
                {authed && (
                  <CircleButton border onClick={handleFavoriteClick}>
                    <FavoriteIcon fill={isFavorite ? 'red' : 'none'} />
                    <span className="icon-txt">관심</span>
                  </CircleButton>
                )}
                <CircleButton border>
                  <NavPopularIcon fill={color.yellow} color={color.yellow} />
                  <span className="icon-txt">{detailsData.vote_average.toFixed(1)}</span>
                </CircleButton>
              </S.ButtonControl>
            </S.VisualContent>
            <S.ButtonWrap onClick={() => navigate(-1)}>
              <CircleButton size="56px" bgColor={color.primary[300]}>
                <CloseIcon width={36} height={36} />
              </CircleButton>
            </S.ButtonWrap>
          </S.VisualWrap>
          <S.ContentWrap>
            <S.InnerContainerd>
              <DetailCard />
              <DetailTabButtons tvId={detailID} />
            </S.InnerContainerd>
          </S.ContentWrap>
        </S.Wrap>
      </S.Overlay>
      {/* showTrailer가 true일 때만 DetailTrailer 모달을 표시 */}
      {showTrailer && <DetailTrailer details={detailsData} onClose={() => setShowTrailer(false)} />}
    </>
  );
};

export default Detail;
