import { ButtonControl } from '../../pages/detail/style';

import CircleButton from './CircleButton';
import { FavoriteIcon, NavPopularIcon, VideoPlayIcon } from '../icon';
import { color } from '../../styled/common';
import { FlexContainer } from '../../components/detail/style';
import styled from 'styled-components';
import Button from './Button';
import { getDetails } from '../../store/modules/thunks/getDetails'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
	const dispatch = useDispatch();
  const { category, detailID } = useParams();
	const { detailsData } = useSelector((state) => state.detailsR);
	 useEffect(() => {
			if (!detailsData) {
				dispatch(getDetails({ id: detailID, contentType: category }));
			}
		}, [dispatch, detailsData, detailID, category]);
		
			const [isFavorite, setIsFavorite] = useState(false);
			const handleFavoriteClick = () => {
				setIsFavorite((prev) => !prev);
			};

		
  return (
    <Displaycontainer>
      <ButtonControl style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <FlexContainer style={{ justifyContent: 'flex-start', alignItems: 'cetner', gap: '16px' }}>
				<CircleButton border onClick={handleFavoriteClick}>
                  <FavoriteIcon fill={isFavorite ? 'red' : 'none'} />
                  <span className="icon-txt">관심</span>
                </CircleButton>
          <CircleButton border>
            <NavPopularIcon fill={color.yellow} color={color.yellow} />
            <span className="icon-txt">{detailsData.vote_average.toFixed(1)}</span>
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
