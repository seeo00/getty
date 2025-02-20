import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { useState } from 'react';
import { CardBasicSkeleton } from '../LoadingSkeleton';

const CardWrap = styled(Link)`
  display: block;
  position: relative;
`;

const CardItem = styled.div`
  display: block;
  aspect-ratio: ${({ $aspectRatio }) => ($aspectRatio === 1 ? '1 / 1' : '2 / 3')};
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
    &:hover {
      scale: 1.05;
    }
  }
`;

const RankBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  pointer-events: none;
  ${respondTo('desktop')} {
    width: 56px;
    height: 56px;
  }
`;

const CardBasic = ({ item, rank, aspectRatio, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <CardWrap to={'/'} className={className}>
      <CardItem $aspectRatio={aspectRatio}>
        {!imageLoaded && <CardBasicSkeleton aspectRatio={aspectRatio} />}
        <img
          src={item.poster || `https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt={item.title || item.name}
          onLoad={() => setImageLoaded(true)}
          style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
        />
      </CardItem>
      {rank && rank <= 20 ? (
        <RankBadge>
          <img
            src={`https://raw.githubusercontent.com/seeo00/project-image-storage/1323df35bd2a7bf34de76642a5a02b166e1690ea/images/main/rank/rank-${rank}.svg`}
            alt={`Rank ${rank}`}
          />
        </RankBadge>
      ) : null}
    </CardWrap>
  );
};

export default CardBasic;
