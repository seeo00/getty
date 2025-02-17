import PropTypes from 'prop-types';

const NavRealityIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      {...props}
    >
      <path
        d="M7 16V4.35537C7 3.87383 7 3.63306 7.0876 3.43778C7.16482 3.26565 7.28917 3.11887 7.44627 3.0144C7.62449 2.89588 7.86198 2.8563 8.33696 2.77714L17.137 1.31047C17.7779 1.20364 18.0984 1.15023 18.3482 1.243C18.5674 1.32441 18.7511 1.48005 18.8674 1.68286C19 1.91398 19 2.23889 19 2.8887V14M7 16C7 17.6568 5.65685 19 4 19C2.34315 19 1 17.6568 1 16C1 14.3431 2.34315 13 4 13C5.65685 13 7 14.3431 7 16ZM19 14C19 15.6568 17.6569 17 16 17C14.3431 17 13 15.6568 13 14C13 12.3431 14.3431 11 16 11C17.6569 11 19 12.3431 19 14Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

NavRealityIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default NavRealityIcon;
