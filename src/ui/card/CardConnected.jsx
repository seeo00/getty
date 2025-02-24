import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { CardBasicSkeleton } from '../LoadingSkeleton';

const CardWrap = styled(Link)`
  display: block;
  position: relative;
`;

const CardItem = styled.div`
  display: block;
  aspect-ratio: 2 / 3;
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

const CardConnected = ({ item, card, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();

  return (
    <CardWrap to={`/category/${item.media_type}/${item.id}`} state={{ background: location }} className={className}>
      <CardItem>
        {!imageLoaded && <CardBasicSkeleton />}
        <img
          src={card.image}
          alt={item.title || item.name}
          onLoad={() => setImageLoaded(true)}
          style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
        />
      </CardItem>
    </CardWrap>
  );
};

export default CardConnected;
