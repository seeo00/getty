import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%;
`;

const StyledSkeleton = styled(Skeleton)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`;

export const CardSkeleton = () => {
  return (
    <ImageWrapper>
      <StyledSkeleton variant="rectangular" animation="wave" />
    </ImageWrapper>
  );
};
