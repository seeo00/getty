import styled from 'styled-components';
import { color } from '../../styled/common';
import PosterCard from '../../ui/card/DetailPoster';
import { respondTo } from '../../styled/GlobalStyle';

/* ${respondTo('tabletMore')} {

}
${respondTo('laptop')} {

} */

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
`;

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1240px;
  top: 5%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${color.gray[500]};
  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  ${respondTo('tabletMore')} {
    position: fixed;
    width: 100%;
    max-width: 1240px;
    top: 5%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${color.gray[50]};
    overflow: hidden;
    overflow-y: auto;
  }
  ${respondTo('laptop')} {
    position: fixed;
    width: 100%;
    max-width: 1240px;
    top: 5%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${color.gray[50]};
    overflow: hidden;
    overflow-y: auto;
  }
`;

export const ButtonWrap = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const VisualWrap = styled.div`
  /*  position: relative;
  height: 80%;
  background-color: #555;
  overflow-y: hidden; */
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 30%;
  ${respondTo('tabletMore')} {
    width: 100%;
    height: 100%;
  }
  ${respondTo('laptop')} {
  }
`;

export const VisualContent = styled.div`
  /* width: 40%; 반응형 떄매 주석처리 */
  position: absolute;
  bottom: 40px;
  left: 40px;
  /* background-color: red; */
`;

export const TitleImg = styled.div`
  font-size: 50px;
  font-weight: 700;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  /* 이미지 없을때 텍스트 */

  margin-bottom: 40px;
  /* background-color: blue; */
`;

export const ButtonControl = styled.div`
  display: flex;
  gap: 16px;
  button:nth-child(1) {
    margin-right: 16px;
  }
`;

export const ContentWrap = styled.div`
  padding-top: 40px;
  background: ${color.gray[800]};
`;

//desc
export const InnerContainer = styled.div`
  gap: 15px;
`;
/* 
export const FullPoster = styled(PosterCard)`
  position: absolute;
  top: 0;
  left: 0;

  img {
    object-fit: cover;
  }
`;
 */
