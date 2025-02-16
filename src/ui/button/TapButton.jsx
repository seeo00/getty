import React, { useState } from 'react';
import styled from 'styled-components';
import EpisodeCard from '../../components/detail/EpisodeCard';
import DetailPosterGallery from '../../components/detail/DetailPosterGallery';

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

const TabText = styled.span`
  display: inline-block;
  padding-bottom: 13px;
  border-bottom: ${({ active }) => (active ? '2px solid blue' : 'none')};
`;

const TabButtons = () => {
  const [activeTab, setActiveTab] = useState('episode');

  return (
    <>
      <div style={{ display: 'flex', gap: '17px' }}>
        <TabButton onClick={() => setActiveTab('episode')}>
          <TabText active={activeTab === 'episode'}>에피소드</TabText>
        </TabButton>
        <TabButton onClick={() => setActiveTab('recommend')}>
          <TabText active={activeTab === 'recommend'}>추천 콘텐츠</TabText>
        </TabButton>
        {/*       <TabButton onClick={() => setActiveTab('review')}>
          <TabText active={activeTab === 'recommend'}>리뷰</TabText>
        </TabButton>
        <TabButton onClick={() => setActiveTab('detail')}>
          <TabText active={activeTab === 'recommend'}>추천 콘텐츠</TabText>
        </TabButton> */}
      </div>
      <div
        style={
          {
            /* padding: '20px', marginTop: '10px'  */
          }
        }
      >
        {activeTab === 'episode' && <EpisodeCard />}
        {activeTab === 'recommend' && <DetailPosterGallery />}
        {/* {activeTab === 'review' && < />}
        {activeTab === 'detail' && < />} */}
      </div>
    </>
  );
};

export default TabButtons;
