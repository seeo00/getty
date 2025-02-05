// MediaSection.jsx
import { MdPlayArrow } from 'react-icons/md';
import { ContentBlock, ContentHeader, MediaCardContainer, MediaCard, PlayIconWrapper } from './styles';

const MediaSection = () => {
    const mediaItems = Array(2).fill(null);

    return (
        <ContentBlock>
            <ContentHeader>
                <span>믿고 보는 웨이브 에디터 추천작</span>
                <span>{'>'}</span>
            </ContentHeader>
            <MediaCardContainer>
                {mediaItems.map((_, i) => (
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
