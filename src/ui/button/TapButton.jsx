// DetailTabButtons.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import EpisodeSection from '../../components/detail/EpisodeCard';
import DetailPosterGallery from '../../components/detail/DetailPosterGallery';
import ReviewCard from '../../components/detail/ReviewCard';
import InfoCard from '../../components/detail/InfoCard';

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 8px 0;
  cursor: pointer;
`;

const TabText = styled.span`
  display: inline-block;
  padding-bottom: 13px;
  border-bottom: 2px solid ${({ active }) => (active ? 'blue' : 'transparent')};
`;

const DetailTabButtons = ({ tvId }) => {
  const [activeTab, setActiveTab] = useState('episode');
  const [likeCount, setLikeCount] = useState(12);

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '17px', alignItems: 'center' }}>
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
        {activeTab === 'episode' && <EpisodeSection tvId={tvId} initialSeason="1" />}
        {activeTab === 'recommend' && <DetailPosterGallery />}
        {activeTab === 'review' && <ReviewCard likeCount={likeCount} handleLike={handleLike} />}
        {activeTab === 'Info' && <InfoCard />}
      </div>
    </>
  );
};

export default DetailTabButtons;
