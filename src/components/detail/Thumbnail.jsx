import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

const CardWrap = styled.div`
  position: relative;
	background: ${color.gray[800]};
  width: ${(props) => (props.full ? '100%' : '100%')};
  height: ${(props) => (props.full ? '100%' : 'auto')};
  max-width: ${(props) => (props.full ? 'none' : '264px')};
  max-height: ${(props) => (props.full ? 'none' : '365px')};
  overflow: hidden;
  border-radius: ${(props) => (props.full ? '0' : '8px')};
  ${respondTo('tabletmore')} {
    width: ${(props) => (props.full ? '100%' : '768px')};
    height: ${(props) => (props.full ? '100%' : '468px')};
    max-width: ${(props) => (props.full ? 'none' : '264px')};
    max-height: ${(props) => (props.full ? 'none' : '365px')};
    overflow: hidden;
    border-radius: ${(props) => (props.full ? '0' : '8px')};
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: 20% 20%;
    display: block;
		border-radius: 8px;
  }
`;

const Thumbnail = ({ backdropPath, full }) => {
  const imageUrl = backdropPath
    ? `https://image.tmdb.org/t/p/original${backdropPath}`
    : '/placeholder.jpg';

  return (
    <CardWrap full={full}>
      <img src={imageUrl} alt="썸네일 이미지" />
    </CardWrap>
  );
};

Thumbnail.propTypes = {
  backdropPath: PropTypes.string,
  full: PropTypes.bool,
};

export default Thumbnail;
