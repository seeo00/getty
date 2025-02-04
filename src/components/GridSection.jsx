import { useState, useMemo } from 'react';
import { ContentBlock, ContentHeader, GridContainer, GridItem } from './styles';

const useCarousel = (itemLength, step = 3) => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + step >= itemLength ? 0 : prev + step));
    };

    return { index, handleNext };
};

const GridSection = () => {
    const gridItems1 = useMemo(() => Array(6).fill(null), []);
    const gridItems2 = useMemo(() => Array(6).fill(null), []);

    const { index: index1, handleNext: handleNextGrid1 } = useCarousel(gridItems1.length);
    const { index: index2, handleNext: handleNextGrid2 } = useCarousel(gridItems2.length);

    return (
        <>
            {[gridItems1, gridItems2].map((gridItems, idx) => (
                <ContentBlock key={idx}>
                    <ContentHeader>
                        <span>믿고 보는 웨이브 에디터 추천작</span>
                        <span onClick={idx === 0 ? handleNextGrid1 : handleNextGrid2}>{'>'}</span>
                    </ContentHeader>
                    <GridContainer>
                        {gridItems.slice(0, 3).map((_, i) => (
                            <GridItem key={i} />
                        ))}
                    </GridContainer>
                </ContentBlock>
            ))}
        </>
    );
};

export default GridSection;
