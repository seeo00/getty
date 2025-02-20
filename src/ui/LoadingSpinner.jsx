import { BeatLoader } from 'react-spinners';
import { color } from '../styled/common';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const LoadingSpinner = () => {
  return (
    <LoaderWrapper>
      <BeatLoader color={color.primary[300]} />
    </LoaderWrapper>
  );
};

export default LoadingSpinner;
