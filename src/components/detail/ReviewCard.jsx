import { useEffect, useRef, useState, useMemo } from 'react';
import ThumbsUpIcon from '../../ui/icon/ThumbsUpIcon';
import LongCircleButton from '../../ui/button/LongCircleButton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { Rating } from '@mui/material';
import * as S from './style';

import { ArrowDownIcon } from '../../ui/icon';
import Button from '../../ui/button/Button';

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

const ReviewCard = () => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();
  const { detailsData, loading, error, currentCategory, currentPage, dramaData, hasMore } = useSelector(
    (state) => state.detailsR
  );

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
  }, [dispatch, detailsData, detailID, detailType]);

  // detailsData가 없을 경우에도 reviews는 빈 배열로 처리
  const reviews = detailsData?.reviews?.results || [];

  // 리뷰에 dummyRating과 dummyLikeCount 추가
  const reviewsWithDummyData = useMemo(() => {
    return reviews.map((review) => ({
      ...review,
      dummyRating: review.rating ?? Math.floor(Math.random() * 5) + 3,
      dummyLikeCount: review.likeCount ?? Math.floor(Math.random() * 100),
    }));
  }, [reviews]);

  // 각 리뷰의 좋아요 수를 관리하는 state
  const [likeCounts, setLikeCounts] = useState({});

  // reviewsWithDummyData가 변경될 때 초기 좋아요 수를 설정
  useEffect(() => {
    const initialCounts = {};
    reviewsWithDummyData.forEach((review, index) => {
      initialCounts[index] = review.dummyLikeCount;
    });
    setLikeCounts(initialCounts);
  }, [reviewsWithDummyData]);

  // 좋아요 증가 함수
  const handleLike = (index) => {
    setLikeCounts((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    dispatch(
      reviews({
        category: currentCategory,
        currentPage: currentPage + 1,
        prevResults: dramaData,
      })
    );
  };

  // 렌더링 시 조건에 따라 내용만 다르게 보여줌 (모든 훅은 호출됨)
  if (loading) {
    return <p>로딩 중...</p>;
  }
  if (error) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }
  if (!detailsData || reviews.length === 0) {
    return null;
  }

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
            <LongCircleButton showCount count={likeCounts[index]} onClick={() => handleLike(index)}>
              <ThumbsUpIcon />
            </LongCircleButton>
          </S.ReviewHeader>
          <ReviewContent content={review.content} />
          {hasMore && (
            <Button
              width="56px"
              onClick={handleLoadMore}
              style={{
                height: '56px',
                borderRadius: '50%',
                padding: 0,
                marginTop: '16px',
                gridColumn: '1 / -1', // 그리드 중앙정렬
                justifySelf: 'center',
              }}
            >
              <ArrowDownIcon width="28" height="28" fill="white" />
            </Button>
          )}
        </S.ReviewCardContainer>
      ))}
    </>
  );
};

export default ReviewCard;
