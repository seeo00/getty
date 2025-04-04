import PropTypes from 'prop-types';

const GuestUserIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 18.5C3.33579 16.0226 6.50702 14.5 10 14.5C13.493 14.5 16.6642 16.0226 19 18.5M14.5 6C14.5 8.48528 12.4853 10.5 10 10.5C7.51472 10.5 5.5 8.48528 5.5 6C5.5 3.51472 7.51472 1.5 10 1.5C12.4853 1.5 14.5 3.51472 14.5 6Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

GuestUserIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default GuestUserIcon;
