import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: ${({ $aspectRatio }) =>
    $aspectRatio === 1 ? '100%' : $aspectRatio === 16 / 9 ? '56.25%' : $aspectRatio === 4 / 5 ? '80%' : '150%'};

  ${({ $banner }) =>
    $banner &&
    `
    @media (min-width: 601px) {
      padding-top: 50%; /* 1920x960 (2:1 비율) */
    }
  `}
`;

const StyledSkeleton = styled(Skeleton)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`;

export const CardBasicSkeleton = ({ aspectRatio, banner }) => {
  return (
    <ImageWrapper $aspectRatio={aspectRatio} $banner={banner}>
      <StyledSkeleton variant="rectangular" animation="wave" />
    </ImageWrapper>
  );
};
