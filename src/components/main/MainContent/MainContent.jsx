import { MainContainer, MainContentSection } from './style';
import Slider from '../Slider/Slider';
import CircleSwiper from '../CircleSwiper/CircleSwiper';
import GridSection from '../GridSection/GridSection';
import TopMovies from '../TopMovies/TopMovies';
import BottomTabBar from '../BottomTabBar/BottomTabBar';

const MainContent = () => {
  return (
    <div>
      {/* 네비게이션 자리 */}
      {/* 헤더 자리 */}

      <MainContainer>
        <Slider />
        <MainContentSection>
          <CircleSwiper />
          <GridSection />
          <TopMovies />
        </MainContentSection>
      </MainContainer>

      {/* 푸터 자리 */}
      <BottomTabBar />
    </div>
  );
};

export default MainContent;
