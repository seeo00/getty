import { Container, ContentSection } from './styles';
import SliderSection from './Slider';
import GridSection from './GridSection';
import MediaSection from './MediaSection';
import TopMovies from './TopMovies';

export const MainContent = () => {
    return (
        <Container>
            <SliderSection />
            <ContentSection>
                <GridSection />
                <MediaSection />
                <TopMovies />
            </ContentSection>
        </Container>
    );
};

export default MainContent;
