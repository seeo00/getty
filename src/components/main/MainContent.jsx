import { Container, ContentSection } from '../styles';
import CircleSwiper from '../CircleSwiper';
import Slider from '../Slider';
import GridSection from '../GridSection';
import MediaSection from '../MediaSection';
import TopMovies from '../TopMovies';
import BottomTabBar from '../BottomTabBar';

const MainContent = () => {
  return (
    <Container>
      <Slider />
      <ContentSection>
        <CircleSwiper />
        <GridSection />
        <MediaSection />
        <TopMovies />
      </ContentSection>
      <BottomTabBar />
    </Container>
  );
};

export default MainContent;
