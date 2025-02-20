import styled from 'styled-components';
import { color } from '../../styled/common';
import { respondTo } from '../../styled/GlobalStyle';

export const DetailContainer = styled.div`
  background: ${color.gray[800]};
`;

export const EpiContainer = styled.div`
  padding: 16px;
  margin: 0 -16px 0 -16px;
  background: ${color.gray[800]};
	border-top-left-radius: 8px;
  border-top-right-radius: 8px;
	border-bottom: solid 1px ${color.gray[80]};
  &:hover {
		border-radius: 8px;
    background: ${color.gray[300]};
  }
  ${respondTo('desktop')} {
    padding: 40px;
    margin: 0 -40px 0 -40px;
   
    background: ${color.gray[800]};
  }
  ${respondTo('tablet')} {
    padding: 40px;
    margin: 0 -40px 0 -40px;

    background: ${color.gray[800]};
  }
`;

export const PaddingContainer = styled.div`
  width: 100%;
  padding: 0 0 0 16px;

  ${respondTo('desktop')} {
    padding: 0 0 0 40px;
    display: flex;
    flex-direction: column;
  }
  ${respondTo('tablet')} {
    padding: 0 0 0 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  ${respondTo('mobile')} {
    padding: 0 0 0 16px;
    width: 100%;
    display: block;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// 이미지 스타일
export const Image = styled.img`
  width: 152px;
  height: 95px;
  object-fit: cover;
  border-radius: 16px;
  ${respondTo('tablet')} {
    width: 269px;
    height: 164px;
    object-fit: cover;
    border-radius: 16px;
  }
`;

export const StyledText = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: ${color.gray[70]};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* expanded가 true면 -webkit-line-clamp 제거, false면 clamp 적용 */
  -webkit-line-clamp: ${props => (props.expanded ? 'none' : 2)};
  transition: all 0.3s ease;

  ${respondTo('laptop')} {
  }
  ${respondTo('tablet')} {
    display: block;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: visible;
  }
`;

//장르 연도 연령
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${color.gray[70]};
  font-size: 14px;
`;

export const TitleName = styled.h3`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: ${color.white};
  margin: 0 0 16px 0;
  ${respondTo('desktop')} {
    display: none;
  }
  ${respondTo('tabletmore')} {
    display: none;
  }
  ${respondTo('tablet')} {
    display: none;
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

  ${respondTo('mobile')} {
    flex-wrap: wrap;
    & > span {
      width: 100%;
    }
  }
`;

export const Overview = styled.p`
  margin: 10px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${color.gray[70]};
  overflow: hidden;

  ${respondTo('laptop')} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${props =>
      !props.expanded &&
      css`
        -webkit-line-clamp: 3;
      `}
  }
  ${respondTo('tablet')} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${props =>
      !props.expanded &&
      css`
        -webkit-line-clamp: 2;
      `}
  }
  ${respondTo('mobile')} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${props =>
      !props.expanded &&
      css`
        -webkit-line-clamp: 2;
      `}
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

// //리뷰창 좋아요 버튼
// export const StyledCircleButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 8px 12px;
//   border: ${(props) => (props.$border ? `1px solid ${color.gray[70]}` : 'none')};
//   border-radius: 50%;
//   background-color: ${(props) => props.$bgColor || 'transparent'};
//   cursor: pointer;
//   color: ${color.gray[70]};

//   & > svg {
//     width: 20px;
//     height: 20px;
//     fill: ${color.gray[70]};
//   }

//   .icon-txt {
//     font-size: 14px;
//     line-height: 20px;
//     color: ${color.gray[70]};
//     margin-left: 4px;
//   }
// `;

/* 
----------------ReviewCard------------------------------- */
export const ReviewCardContainer = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${color.gray[500]};
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const ReviewLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StarRatingWrapper = styled.div`
  /* 별점 버튼 자리 */
`;

export const AuthorName = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${color.gray[70]};
`;

export const ReviewDate = styled.span`
  font-size: 12px;
  line-height: 11px;
  color: ${color.gray[70]};
`;

export const ReviewContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${color.white};
  margin: 0;
  ${(props) =>
    !props.expanded &&
    `
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`;

export const MoreButton = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${color.white};
  cursor: pointer;
  display: inline-block;
  margin-top: 4px;
`;
