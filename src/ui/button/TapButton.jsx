// TabButtons.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import EpisodeCard from '../../components/detail/EpisodeCard';
import DetailPosterGallery from '../../components/detail/DetailPosterGallery';
import ReviewCard from '../../components/detail/ReviewCard';
import { Rating } from '@mui/material';
import InfoCard from '../../components/detail/InfoCard';

const dummyReview = {
  Rating: <Rating value={4} readOnly />,
  author: '홍길동',
  date: '2025년 02월 17일',
  reviewText:
    'Lorem ipsum dolor sit amet consectetur. Felis bibendum non consectetur ut sit mattis aliquam. Convallis feugiat egestas nulla massa praesent eu ullamcorper faucibus. Orci vitae nulla nunc sit faucibus tristique id. Lorem ipsum dolor sit amet consectetur. Felis bibendum non consectetur ut sit mattis aliquam. Convallis feugiat egestas nulla massa praesent eu ullamcorper faucibus. Orci vitae nulla nunc sit faucibus tristique id. Lorem ipsum dolor sit amet consectetur. Felis bibendum non consectetur ut sit mattis aliquam. Convallis feugiat egestas nulla massa praesent eu ullamcorper faucibus. Orci vitae nulla nunc sit faucibus tristique id.',
};

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 8px 0;
  cursor: pointer;
`;

const TabText = styled.span`
  display: inline-block;
  padding-bottom: 13px;
  border-bottom: ${({ active }) => (active ? '2px solid blue' : 'none')};
`;

const TabButtons = () => {
  const [activeTab, setActiveTab] = useState('episode');
  const [likeCount, setLikeCount] = useState(12);

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '17px' }}>
        <TabButton onClick={() => setActiveTab('episode')}>
          <TabText active={activeTab === 'episode'}>에피소드</TabText>
        </TabButton>
        <TabButton onClick={() => setActiveTab('recommend')}>
          <TabText active={activeTab === 'recommend'}>추천 콘텐츠</TabText>
        </TabButton>
        <TabButton onClick={() => setActiveTab('review')}>
          <TabText active={activeTab === 'review'}>리뷰</TabText>
        </TabButton>
        <TabButton onClick={() => setActiveTab('Info')}>
          <TabText active={activeTab === 'Info'}>상세 정보</TabText>
        </TabButton>
      </div>
      <div>
        {activeTab === 'episode' && <EpisodeCard />}
        {activeTab === 'recommend' && <DetailPosterGallery />}
        {activeTab === 'review' && <ReviewCard {...dummyReview} likeCount={likeCount} handleLike={handleLike} />}
        {activeTab === 'Info' && <InfoCard />}
      </div>
    </>
  );
};

export default TabButtons;
