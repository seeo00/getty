import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../../styled/common';
import { InfoIcon, PlayCircleIcon } from '../icon';
import { respondTo } from '../../styled/GlobalStyle';

export const CardWrap = styled(Link)`
  display: block;
  position: relative;
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

const PlayIconBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
`;

const CardInfo = styled.div`
  margin-top: 4px;
  padding: 0 4px;
  color: ${color.gray[70]};
  > div {
    padding-right: 40px;
    position: relative;
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    justify-content: flex-end;
  }
  strong {
    display: block;
    font-size: 0.875rem;
    width: 100%;
  }
  p {
    font-size: 0.75rem;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  ${respondTo('tabletMore')} {
    margin-top: 8px;
    strong,
    p {
      font-size: 0.875rem;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
  ${respondTo('desktop')} {
    strong {
      font-size: 1rem;
    }
  }
`;

const CardPlay = ({ item }) => {
  return (
    <CardWrap to={'/'}>
      <CardItem>
        <img
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}`}
          alt={item.title || item.name}
        />
        <PlayIconBox>
          <PlayCircleIcon width="50%" height="50%" fill="rgba(0,0,0,0.3)" />
        </PlayIconBox>
      </CardItem>
      <CardInfo>
        <div>
          <strong className="ellipsis">에피스드제목타이ddddddddddddddddddd틀</strong>
          <p>남은시간</p>
          <button>
            <InfoIcon color="#aaa" />
          </button>
        </div>
      </CardInfo>
    </CardWrap>
  );
};

export default CardPlay;
