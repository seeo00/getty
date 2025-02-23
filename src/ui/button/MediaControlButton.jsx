import { ButtonControl } from '../../pages/detail/style';

import CircleButton from './CircleButton';
import { FavoriteIcon, NavPopularIcon, VideoPlayIcon } from '../icon';
import { color } from '../../styled/common';
import { FlexContainer } from '../../components/detail/style';
import styled from 'styled-components';
import Button from './Button';

const Displaycontainer = styled.div`
  display: block;
  bottom: 40px;
  left: 40px;
  margin: 16px 0 6px 0;
  gap: 16px;
  @media (min-width: 601px) {
    display: none;
  }
`;

const MediaControlButtons = () => {
  return (
    <Displaycontainer>
      <ButtonControl style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <FlexContainer style={{ justifyContent: 'flex-start', alignItems: 'cetner', gap: '16px' }}>
          <CircleButton border>
            <FavoriteIcon />
            <span className="icon-txt">관심</span>
          </CircleButton>
          <CircleButton border>
            <NavPopularIcon fill={color.yellow} color={color.yellow} />
            <span className="icon-txt">평점</span>
          </CircleButton>
        </FlexContainer>
        <Button width="100%">
          <VideoPlayIcon color={color.white} />
          재생
        </Button>
      </ButtonControl>
    </Displaycontainer>
  );
};

export default MediaControlButtons;
