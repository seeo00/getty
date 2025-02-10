import PropTypes from 'prop-types';

const MainPageLeftIcon = ({ width = 12, height = 22, color = '#AAAAAA', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11 21L1 11L11 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

MainPageLeftIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default MainPageLeftIcon;
