// components/main/MainContent/MainContent.jsx
import { MainContainer } from './style';
import MainVisual from '../MainVisual/MainVisual';
import CircleMenu from '../Circle/CircleMenu ';
import ContentSection from '../ContentSection/ContentSection';
import Top20Section from '../Top20Section/Top20Section';

const MainContent = () => {
    // 오리지널 컨텐츠 데이터
    const originalData = [
        {
            id: 1,
            title: "오리지널 컨텐츠1",
            imgUrl: "/images/original1.jpg",
            desc: "오리지널 시리즈의 새로운 이야기"
        },
        {
            id: 2,
            title: "오리지널 컨텐츠2",
            imgUrl: "/images/original2.jpg",
            desc: "새롭게 공개된 오리지널"
        }
        // ... 추가 데이터
    ];

    // 신규 컨텐츠 데이터
    const newContentData = [
        {
            id: 1,
            title: "신규 컨텐츠1",
            imgUrl: "/images/new1.jpg",
            desc: "새로 업데이트된 컨텐츠"
        }
        // ... 추가 데이터
    ];

    // 인기 컨텐츠 데이터
    const popularData = [
        {
            id: 1,
            title: "인기 컨텐츠1",
            imgUrl: "/images/popular1.jpg",
            desc: "지금 가장 인기있는 시리즈"
        }
        // ... 추가 데이터
    ];

    return (
        <MainContainer>
            <MainVisual />
            <CircleMenu />
            <ContentSection 
                title="믿고 보는 웨이브 오리지널" 
                data={originalData} 
            />
            <ContentSection 
                title="새로 올라온 컨텐츠" 
                data={newContentData} 
            />
            <ContentSection 
                title="지금 인기있는 컨텐츠" 
                data={popularData} 
            />
            <Top20Section />
        </MainContainer>
    );
};

export default MainContent;