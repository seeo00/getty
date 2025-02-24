// PosterCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrap = styled.div`
  width: ${(props) => (props.full ? '100%' : '100%')};
  height: ${(props) => (props.full ? '100%' : 'auto')};
  max-width: ${(props) => (props.full ? 'none' : '264px')};
  max-height: ${(props) => (props.full ? 'none' : '365px')};
  overflow: hidden;
  border-radius: ${(props) => (props.full ? '0' : '8px')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
//저해상도 포스터
const PosterCard = ({ posterPath, full }) => {
  const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : '/placeholder.jpg';

  return (
    <CardWrap full={full}>
      <img src={imageUrl} alt="포스터 이미지" />
    </CardWrap>
  );
};

PosterCard.propTypes = {
  posterPath: PropTypes.string,
  full: PropTypes.bool,
};

export default PosterCard;
