import { useState, useMemo } from 'react';
import { MdPlayArrow } from 'react-icons/md';
import { ContentBlock, ContentHeader, MediaCardContainer, MediaCard, PlayIconWrapper } from './styles';

const useCarousel = (itemLength, step = 2) => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + step >= itemLength ? 0 : prev + step));
    };

    return { index, handleNext };
};

const MediaSection = () => {
    const mediaItems = useMemo(() => Array(3).fill(null), []);
    const { handleNext } = useCarousel(mediaItems.length);

    return (
        <ContentBlock>
            <ContentHeader>
                <span>믿고 보는 웨이브 에디터 추천작</span>
                <span onClick={handleNext}>{'>'}</span>
            </ContentHeader>
            <MediaCardContainer>
                {mediaItems.slice(0, 2).map((_, i) => (
                    <MediaCard key={i}>
                        <PlayIconWrapper>
                            <MdPlayArrow size={32} color="white" />
                        </PlayIconWrapper>
                    </MediaCard>
                ))}
            </MediaCardContainer>
        </ContentBlock>
    );
};

export default MediaSection;
