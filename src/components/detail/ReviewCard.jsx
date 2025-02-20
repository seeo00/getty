// ReviewCard.jsx
import { useEffect, useRef, useState, useMemo } from 'react';
import ThumbsUpIcon from '../../ui/icon/ThumbsUpIcon';
import LongCircleButton from '../../ui/button/LongCircleButton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { Rating } from '@mui/material';
import * as S from './style';

const formatReviewDate = (createdAt) => {
  if (!createdAt) return '날짜 정보 없음';
  const date = new Date(createdAt);
  if (isNaN(date.getTime())) return '날짜 정보 없음';
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

const ReviewContent = ({ content }) => {
  const textRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflow(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [content, expanded]);

  return (
    <S.ReviewContentWrapper>
      <S.ReviewText ref={textRef} expanded={expanded}>
        {content}
      </S.ReviewText>
      {!expanded && isOverflow && <S.MoreButton onClick={() => setExpanded(true)}>...더 보기</S.MoreButton>}
    </S.ReviewContentWrapper>
  );
};

const ReviewCard = ({ handleLike }) => {
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

  const reviews = detailsData.reviews?.results;
  if (!reviews || reviews.length === 0) return null;

  // 각 리뷰에 dummyRating과 dummyLikeCount 추가
  const reviewsWithDummyData = useMemo(() => {
    return reviews.map((review) => ({
      ...review,
      dummyRating: review.rating ?? Math.floor(Math.random() * 5) + 3,
      dummyLikeCount: review.likeCount ?? Math.floor(Math.random() * 100),
    }));
  }, [reviews]);

  return (
    <>
      {reviewsWithDummyData.map((review, index) => (
        <S.ReviewCardContainer key={index}>
          <S.ReviewHeader>
            <S.ReviewLeftSection>
              <S.StarRatingWrapper>
                <Rating value={review.dummyRating} readOnly size="small" />
              </S.StarRatingWrapper>
              <S.AuthorName>{review.author}</S.AuthorName>
              <S.ReviewDate>{formatReviewDate(review.created_at)}</S.ReviewDate>
            </S.ReviewLeftSection>
            <LongCircleButton showCount count={review.dummyLikeCount} onClick={handleLike}>
              <ThumbsUpIcon />
            </LongCircleButton>
          </S.ReviewHeader>
          <ReviewContent content={review.content} />
        </S.ReviewCardContainer>

      ))}
    </>
  );
};

export default ReviewCard;
