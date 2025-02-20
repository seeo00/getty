import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${({ $aspectRatio }) => ($aspectRatio === 1 ? '100%' : $aspectRatio === 16 / 9 ? '56.25%' : '150%')};
  // aspectRatio 기본값 2/3 (세로 포스터 비율, CardBasic)
`;

const StyledSkeleton = styled(Skeleton)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`;

export const CardBasicSkeleton = ({ aspectRatio }) => {
  return (
    <ImageWrapper $aspectRatio={aspectRatio}>
      <StyledSkeleton variant="rectangular" animation="wave" />
    </ImageWrapper>
  );
};
