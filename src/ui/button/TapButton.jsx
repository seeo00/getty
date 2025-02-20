// DetailTabButtons.jsx
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import EpisodeSection from '../../components/detail/EpisodeCard';
import DetailPosterGallery from '../../components/detail/DetailPosterGallery';
import ReviewCard from '../../components/detail/ReviewCard';
import InfoCard from '../../components/detail/InfoCard';
import ContentList from '../card/list/ContentList';
import { getRecommendations } from '../../store/modules/thunks/getRecommendations';


const dispatch = useDispatch();
const { recommendationType, recommendationID } = useParams();
const { recommendationData, loading, error } = useSelector((state) => state.recommendationsR);

useEffect(() => {
	if (!detailsData) {
		dispatch(getDetails({ id: detailID, contentType: recommendationType }));
	}
}, [dispatch, recommendationsData, recommendationID, recommendationType]);

if (loading) return <p>로딩 중...</p>;
if (error) return <p>데이터를 찾을 수 없습니다.</p>;
if (!recommendationsData) return null;

const recommendation = recommendationsData;

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
	const [recommendData, setRecommendData] = useState([]);
	const [recommendLoading, setRecommendLoading] = useState(false);
  const [likeCount, setLikeCount] = useState(12);
	const lastElementRef = useRef(null);


  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (activeTab === 'recommend') {
      setRecommendLoading(true);
      // fetch나 axios를 사용하여 추천 콘텐츠 데이터를 가져온다고 가정
      fetch(`/api/recommendations?tvId=${tvId}`)
        .then((res) => res.json())
        .then((data) => {
          setRecommendData(data.results);
          setRecommendLoading(false);
        })
        .catch(() => {
          setRecommendLoading(false);
        });
    }
  }, [activeTab, tvId]);


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
				{activeTab === 'recommend' && (
          // 추천 콘텐츠 데이터를 props로 전달
          <ContentList data={recommendData} loading={recommendLoading} lastElementRef={lastElementRef} />
        )}
        {activeTab === 'review' && <ReviewCard likeCount={likeCount} handleLike={handleLike} />}
        {activeTab === 'Info' && <InfoCard />}
      </div>
    </>
  );
};

export default DetailTabButtons;
