// DetailTabButtons.jsx
import { useState } from 'react';
import styled from 'styled-components';
import EpisodeSection from './EpisodeCard';
import ReviewCard from './ReviewCard';
import InfoCard from './InfoCard';
import { SortAndCountDropdown } from './SortAndCountButton';
import CardFlexList from '../../ui/card/CardFlexList';

// import { ContentList } from '../../components/category/CardContentList';
// import DramaPosterGallery from '../../components/detail/DetailPosterGallery';
// import DetailCard from '../../components/detail/DetailCard';
// import { DetailPosterGallery } from '../../components/detail/Index';

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 8px 0;
  cursor: pointer;
  margin: 40px 0 0 0;
`;

const TabText = styled.span`
  display: inline-block;
  padding-bottom: 13px;
  border-bottom: 2px solid ${({ active }) => (active ? 'blue' : 'transparent')};
`;

const DetailTabButtons = ({ tvId }) => {
  const [activeTab, setActiveTab] = useState('episode');
  const [likeCount, setLikeCount] = useState(12);

  //기능 미구현
  const handleSortLike = () => {
    console.log('베스트순');
  };

  const handleSortDate = () => {
    console.log('날짜순');
  };

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  //기능 미구현 예시 갯수
  const reviewCount = '000';

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

        {activeTab === 'recommend' && <CardFlexList />}
        {activeTab === 'review' && (
          <>
            <SortAndCountDropdown reviewCount={reviewCount} onSortLike={handleSortLike} onSortDate={handleSortDate} />
            <ReviewCard likeCount={likeCount} handleLike={handleLike} />
          </>
        )}
        {activeTab === 'Info' && <InfoCard />}
      </div>
    </>
  );
};

export default DetailTabButtons;
