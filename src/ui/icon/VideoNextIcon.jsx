import PropTypes from 'prop-types';

const VideoNextIcon = ({ width = 24, height = 24, color = '#e0e0e0', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M26.8334 1.16602V26.8327M5.93252 24.8534L16.6369 16.2899C17.6156 15.5069 18.105 15.1154 18.2821 14.6425C18.4375 14.2278 18.4375 13.7709 18.2821 13.3562C18.105 12.8833 17.6156 12.4918 16.6369 11.7088L5.93252 3.1453C4.40687 1.92478 3.64405 1.31452 3.00206 1.31383C2.44374 1.31323 1.91556 1.56708 1.56725 2.00343C1.16675 2.50517 1.16675 3.48207 1.16675 5.43585V22.5628C1.16675 24.5166 1.16675 25.4935 1.56725 25.9953C1.91556 26.4316 2.44374 26.6855 3.00206 26.6849C3.64405 26.6842 4.40687 26.0739 5.93252 24.8534Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

VideoNextIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default VideoNextIcon;
