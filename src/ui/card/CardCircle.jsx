import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CardBasicSkeleton } from '../LoadingSkeleton';

const CardWrap = styled(Link)`
  display: block;
  position: relative;
  padding-bottom: 16%;
`;

const CardItem = styled.div`
  display: block;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: all 0.3s;
    &:hover {
      scale: 1.05;
    }
  }
`;

const LogoBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 70%;
  aspect-ratio: 2.53 / 1;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
`;

const CardCircle = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();

  return (
    <CardWrap to={`/category/${item.media_type}/${item.id}`} state={{ background: location }}>
      <CardItem>
        {!imageLoaded && <CardBasicSkeleton aspectRatio={1} />}
        <img
          src={item.poster}
          alt={item.title || item.name}
          onLoad={() => setImageLoaded(true)}
          style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
        />
      </CardItem>
      <LogoBox>
        <img src={item.logo} alt={item.title || item.name} />
      </LogoBox>
    </CardWrap>
  );
};

export default CardCircle;
