import PropTypes from 'prop-types';

const SoloContentIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      {...props}
    >
      <path
        d="M11.3578 2.01538C11.2266 1.94979 11.161 1.91699 11.0922 1.90408C11.0313 1.89265 10.9687 1.89265 10.9078 1.90408C10.839 1.91699 10.7734 1.94979 10.6422 2.01538L1 6.83649L10.6422 11.6576C10.7734 11.7232 10.839 11.756 10.9078 11.7689C10.9687 11.7803 11.0313 11.7803 11.0922 11.7689C11.161 11.756 11.2266 11.7232 11.3578 11.6576L21 6.83649L11.3578 2.01538Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SoloContentIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default SoloContentIcon;
