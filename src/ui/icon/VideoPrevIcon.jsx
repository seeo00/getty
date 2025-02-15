import PropTypes from 'prop-types';

const VideoPrevIcon = ({ width = 24, height = 24, color = '#e0e0e0', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.16675 26.8327V1.16602M22.0676 3.1453L11.3633 11.7088C10.3845 12.4918 9.89519 12.8833 9.71802 13.3562C9.56268 13.7709 9.56268 14.2278 9.71802 14.6425C9.89519 15.1154 10.3845 15.5069 11.3633 16.2899L22.0676 24.8534C23.5933 26.0739 24.3561 26.6842 24.9981 26.6849C25.5564 26.6855 26.0846 26.4316 26.4329 25.9953C26.8334 25.4935 26.8334 24.5166 26.8334 22.5628V5.43585C26.8334 3.48207 26.8334 2.50517 26.4329 2.00343C26.0846 1.56708 25.5564 1.31323 24.9981 1.31383C24.3561 1.31452 23.5933 1.92478 22.0676 3.1453Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

VideoPrevIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default VideoPrevIcon;
