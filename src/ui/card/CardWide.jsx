import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FavoriteIcon } from '../icon';
import { color } from '../../styled/common';

const CardWrap = styled(Link)`
  display: block;
  position: relative;
  background-color: ${color.gray[700]};
`;

const CardItem = styled.div`
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
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

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  color: ${color.gray[70]};
  button {
    width: 40px;
    height: 40px;
    justify-content: flex-end;
  }
`;

const CardWide = ({ item, showInfo = false }) => {
  return (
    <CardWrap to={'/'}>
      <CardItem>
        <img
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}`}
          alt={item.title || item.name}
        />
      </CardItem>
      {showInfo && ( // showInfo가 true일 때만 CardInfo 렌더링
        <CardInfo>
          <strong className="ellipsis">{item.title || item.name}</strong>
          <button>
            <FavoriteIcon color="#aaa" />
          </button>
        </CardInfo>
      )}
    </CardWrap>
  );
};

export default CardWide;
