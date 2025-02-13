import styled from 'styled-components';

export const Contents5Wrap = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 50px;
    font-weight: 300;
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

// 스타일 적용
export const MovieCard = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
`;

export const MovieTitle = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
`;

export const ContentsWrap = styled.div`
  h3 {
    font-size: 18px;
    color: tomato;
    opacity: 0.7;
    font-weight: 300;
    margin-bottom: 12px;
  }
`;
