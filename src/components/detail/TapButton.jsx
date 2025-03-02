import { useState, useRef } from 'react';
import styled from 'styled-components';
import EpisodeSection from './EpisodeCard';
import ReviewCard from './ReviewCard';
import InfoCard from './InfoCard';
import { SortAndCountDropdown } from './SortAndCountButton';
import DramaPosterGallery from './DetailPosterGallery';
// import RecommendComponent from './RecommendComponent';

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

const DetailTabButtons = ({ tvId, category, hasEpisode }) => {
  // 컴포넌트가 마운트될 때 한 번만 초기 activeTab 값을 계산
  const initialTabRef = useRef(
    category === 'movie' || !hasEpisode ? 'recommend' : 'episode'
  );
  const [activeTab, setActiveTab] = useState(initialTabRef.current);
  const [likeCount, setLikeCount] = useState(12);

  const handleSortLike = () => {
    console.log('날짜순');
  };

  const handleSortDate = () => {
    console.log('베스트순');
  };

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

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
        {activeTab === 'recommend' && <DramaPosterGallery />}
        {/* {activeTab === 'recommend' && <RecommendComponent />} */}
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

DetailTabButtons.defaultProps = {
  hasEpisode: true,
};

export default DetailTabButtons;
