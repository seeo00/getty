import { ContentBlock, ContentHeader, GridContainer, GridItem, NumberLabel } from './styles';

const GridSection = () => {
    return (
        <>
            {[...Array(4)].map((_, idx) => (
                <ContentBlock key={idx}>
                    <ContentHeader>
                        <span>믿고 보는 웨이브 에디터 추천작</span>
                        <span>{'>'}</span>
                    </ContentHeader>
                    <GridContainer>
                        {[...Array(5)].map((_, i) => (
                            <GridItem key={i}>{idx === 1 && <NumberLabel>{i + 1}</NumberLabel>}</GridItem>
                        ))}
                    </GridContainer>
                </ContentBlock>
            ))}
        </>
    );
};

export default GridSection;
