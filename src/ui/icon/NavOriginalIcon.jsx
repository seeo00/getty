import PropTypes from 'prop-types';

const NavOriginalIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      {...props}
    >
      <path
        d="M6 19.6622C8.98901 17.9331 11 14.7014 11 11C11 7.29859 8.98901 4.06687 6 2.33782M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

NavOriginalIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default NavOriginalIcon;
