import PropTypes from 'prop-types';

const SnowCloudIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
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
        d="M19 15.0787C20.206 14.2714 21 12.8966 21 11.3364C21 8.99286 19.2085 7.06772 16.9203 6.85579C16.4522 4.00856 13.9798 1.83643 11 1.83643C8.02024 1.83643 5.54781 4.00856 5.07974 6.85579C2.79151 7.06772 1 8.99286 1 11.3364C1 12.8966 1.79401 14.2714 3 15.0787M7 14.8364H7.01M7 18.8364H7.01M11 16.8364H11.01M11 20.8364H11.01M15 14.8364H15.01M15 18.8364H15.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SnowCloudIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default SnowCloudIcon;
