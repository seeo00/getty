import PropTypes from 'prop-types';

const MenuIcon = ({ width = 24, height = 24, color = '#AAAAAA', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 7.5H19M1 1.5H19M1 13.5H19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MenuIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default MenuIcon;
