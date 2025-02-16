import styled from 'styled-components';
import { color } from '../../styled/common';
import { respondTo } from '../../styled/GlobalStyle';

export const DetailContainer = styled.div`
  background: ${color.gray[800]};
`;

export const EpiContainer = styled.div`
  padding: 40px;
  margin: 10px 0 0 0;
  border-radius: 8px;
  background: ${color.gray[800]};

  &:hover {
    background: ${color.gray[300]};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// 이미지 스타일
export const Image = styled.img`
  width: 269px;
  height: 164px;
  object-fit: cover;
  border-radius: 16px;
`;

export const StyledText = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: ${color.gray[90]};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${respondTo('tabletMore')} {
    display: block;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: visible;
  }
  ${respondTo('laptop')} {
  }
`;

//장르 연도 연령
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${color.gray[70]};
  font-size: 14px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const Overview = styled.p`
  margin: 10px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${color.gray[70]};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${respondTo('tabletMore')} {
    display: block;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: visible;
  }
  ${respondTo('laptop')} {
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
