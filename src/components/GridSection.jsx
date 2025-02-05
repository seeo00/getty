// GridSection.jsx
import { ContentBlock, ContentHeader, GridContainer, GridItem } from './styles';

const GridSection = () => {
    const gridItems = Array(3).fill(null);

    return (
        <>
            {[...Array(2)].map((_, idx) => (
                <ContentBlock key={idx}>
                    <ContentHeader>
                        <span>믿고 보는 웨이브 에디터 추천작</span>
                        <span>{'>'}</span>
                    </ContentHeader>
                    <GridContainer>
                        {gridItems.map((_, i) => (
                            <GridItem key={i} />
                        ))}
                    </GridContainer>
                </ContentBlock>
            ))}
        </>
    );
};

export default GridSection;
