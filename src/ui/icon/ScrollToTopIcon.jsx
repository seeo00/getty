import PropTypes from 'prop-types';

const ScrollToTopIcon = ({ width = 28, height = 16, color = '#aaa', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M26 14L14 2L2 14" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ScrollToTopIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default ScrollToTopIcon;
