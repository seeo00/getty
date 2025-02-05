// index.jsx
import { Container, ContentSection, ContentBlock, ContentHeader, AdBanner, AdText } from './styles';
import Slider from './Slider';
import GridSection from './GridSection';
import MediaSection from './MediaSection';
import TopMovies from './TopMovies';

export const MainContent = () => {
    return (
        <Container>
            <Slider />
            <ContentSection>
                <GridSection />
                <MediaSection />
                <TopMovies />
                <ContentBlock>
                    <ContentHeader>
                        <span>광고 배너</span>
                        <span>{'>'}</span>
                    </ContentHeader>
                    <AdBanner />
                </ContentBlock>
                <AdText>
                    모텔 캘리포니아 1월 10일
                    <br />밤 9시 50분 첫 방송!
                </AdText>
            </ContentSection>
        </Container>
    );
};
