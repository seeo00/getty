import styled from 'styled-components';
import { AlertIcon } from '../../ui/icon';
import { color } from '../../styled/common';

const DetailTrailer = ({ details, onClose }) => {
  const videoKey = details.videos?.results?.find(
    (video) => video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser')
  )?.key;

  if (!videoKey) {
    return (
      <TrailerModal>
        <TrailerOverlay onClick={onClose}>
          <TrailerContent onClick={(e) => e.stopPropagation()}>
            <ErrorMessage>
              <AlertIcon width={40} height={40} />
              영상을 찾을 수 없습니다.
            </ErrorMessage>
          </TrailerContent>
        </TrailerOverlay>
      </TrailerModal>
    );
  }

  return (
    <TrailerModal>
      <TrailerOverlay onClick={onClose}>
        <TrailerContent onClick={(e) => e.stopPropagation()}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Trailer"
            allowFullScreen
          />
        </TrailerContent>
      </TrailerOverlay>
    </TrailerModal>
  );
};

export default DetailTrailer;

const TrailerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TrailerOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TrailerContent = styled.div`
  position: relative;
  width: 80%;
  max-width: 1000px;
  height: 60vh;
  background: black;
  cursor: default;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${color.gray[70]};
  font-size: 1.125rem;
  text-align: center;
`;
