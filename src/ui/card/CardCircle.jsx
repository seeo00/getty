import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  return (
    <CardWrap to={'/'}>
      <CardItem>
        <img
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}`}
          alt={item.title || item.name}
        />
      </CardItem>
      <LogoBox>
        <img src={item.logo} alt={item.title || item.name} />
      </LogoBox>
    </CardWrap>
  );
};

export default CardCircle;
