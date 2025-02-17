// ReviewCard.jsx
import React from 'react';
import styled from 'styled-components';
import { color } from '../../styled/common';
import ThumbsUpIcon from '../../ui/icon/ThumbsUpIcon';
import LongCircleButton from '../../ui/button/LongCircleButton';

const ReviewCardContainer = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${color.gray[500]};
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StarRatingWrapper = styled.div`
  /* 별점 버튼을 넣을 자리 */
`;

const AuthorName = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${color.gray[70]};
`;

const ReviewDate = styled.span`
  font-size: 12px;
  line-height: 11px;
  color: ${color.gray[70]};
`;

const RightSection = styled.div`
  align-self: flex-start;
`;

const ReviewContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ReviewText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${color.white};
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const MoreButton = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${color.white};
  cursor: pointer;
  display: inline-block;
  margin-top: 4px;
`;

const ReviewCard = ({
  Rating,
  author, // 작성자이름
  date, // 2025년 02월 16일
  reviewText,
  likeCount,
  handleLike,
}) => {
  return (
    <ReviewCardContainer>
      <ReviewHeader>
        <LeftSection>
          <StarRatingWrapper>{Rating}</StarRatingWrapper>
          <AuthorName>{author}</AuthorName>
          <ReviewDate>{date}</ReviewDate>
        </LeftSection>
        <LongCircleButton showCount count={likeCount} onClick={handleLike}>
          <ThumbsUpIcon />
        </LongCircleButton>
      </ReviewHeader>
      <ReviewContentWrapper>
        <ReviewText>{reviewText}</ReviewText>
        <MoreButton>...more</MoreButton>
      </ReviewContentWrapper>
    </ReviewCardContainer>
  );
};
export default ReviewCard;
