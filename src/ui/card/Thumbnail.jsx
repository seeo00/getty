// PosterCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrap = styled.div`
  position: relative;
  width: ${(props) => (props.full ? '100%' : '100%')};
  height: ${(props) => (props.full ? '100%' : 'auto')};
  max-width: ${(props) => (props.full ? 'none' : '264px')};
  max-height: ${(props) => (props.full ? 'none' : '365px')};
  overflow: hidden;
  border-radius: ${(props) => (props.full ? '0' : '8px')};

  //이미지 위치조정
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: 20% 30%;
    display: block;
  }
`;
//원본사이즈 고해상도 포스터 상세페이지 배너용
const Thumbnail = ({ posterPath, full }) => {
  const imageUrl = posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : '/placeholder.jpg';

  return (
    <CardWrap full={full}>
      <img src={imageUrl} alt="포스터 이미지" />
    </CardWrap>
  );
};

Thumbnail.propTypes = {
  posterPath: PropTypes.string,
  full: PropTypes.bool,
};

export default Thumbnail;
