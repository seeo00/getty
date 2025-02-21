import styled from 'styled-components';
import { color } from '../../styled/common';
import { respondTo } from '../../styled/GlobalStyle';

export const Container = styled.div``

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
    ${props => !props.expanded ? '-webkit-line-clamp: 3;' : ''}
  }
  
  ${respondTo('tablet')} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${props => !props.expanded ? '-webkit-line-clamp: 2;' : ''}
  }
  
  ${respondTo('mobile')} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${props => !props.expanded ? '-webkit-line-clamp: 2;' : ''}
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


// 전체 InfoCard 컨테이너
export const InfoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
	margin-top: 26px;//탭버튼 마진제외
max-width: 1159;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    align-items: flex-start;
    flex-direction: row;
  }
`;

// TextContainer와 DetailList를 감싸는 래퍼 컴포넌트
export const TextAndDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  padding: 0 0 0 40px;

	${respondTo('desktop')} {
		display:block;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
	}
  ${respondTo('tablet')} {
    flex-direction: column;
    gap: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
  }
	@media (min-width: 601px) and (max-width: 767px) {
		display: contents;
		flex-direction: column;
		padding: 0 0 0 40px;
    gap: 40px;}
  ${respondTo('mobile')} {
    display: contents;
		flex-direction: column;
    gap: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
  }

`;

// 포스터 컨테이너 (고정 사이즈 114x168px)
export const PosterContainer = styled.div`
  width: clamp(114px, 20vw, 264px);//비율유지 반응형
  aspect-ratio: 264 / 365;
  overflow: hidden;
  border-radius: 8px;

  ${respondTo('desktop')} {
    max-width: 264px;
    max-height: 365px;
    flex-shrink: 0;
  }
  ${respondTo('tablet')} {
    min-width: 172px;
    min-height: 248px;
    flex-shrink: 0;
  }
  ${respondTo('mobile')} {
    width: 114px;
    height: 168px;
    flex-shrink: 0;
  }
`;

// 타이틀과 줄거리
export const TextContainer = styled.div`
  flex: 1;
  color: ${color.white};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
	margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
	text-align: left;

  h2 {text-align: left;
    margin: 0 0 8px;
  }

  p {text-align: left;
    margin: 0;
  }

	${respondTo('desktop')} {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
	}
  ${respondTo('tablet')} {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
  }
	@media (min-width: 601px) and (max-width: 767px) {
		order: 1;
    text-align: center;
		padding: 0 0 0 30px;}
	${respondTo('mobile')} {
    order: 1; 
    text-align: center;
  }
`;

export const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  font-size: 12px;
  line-height: 11px;
  color: ${color.white};

  li {
    margin-bottom: 4px;
  }
	${respondTo('desktop')} {
		display: block;
    width: 100%; 
    margin: 40px 0 0 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  ${respondTo('tablet')} {
		font-size: 12px;
    font-weight: 400;
    line-height: 11px;
  }
	@media (min-width: 601px) and (max-width: 767px) {
  order: 2;
  flex-basis: 100%;
  margin-top: 16px;}
  ${respondTo('mobile')} {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;   
		order: 2; 
    flex-basis: 100%; 
    margin-top: 16px;
  }

`;
