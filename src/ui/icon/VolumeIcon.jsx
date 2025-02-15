import PropTypes from 'prop-types';

const VolumeIcon = ({ width = 24, height = 24, color = '#7f7f7f', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M34.2046 4.16718C36.803 7.77929 38.3334 12.2112 38.3334 17.0005C38.3334 21.7899 36.803 26.2217 34.2046 29.8339M26.8665 9.66718C28.3164 11.7459 29.1667 14.2739 29.1667 17.0005C29.1667 19.7271 28.3164 22.2552 26.8665 24.3339M15.663 3.00427L9.85923 8.80803C9.54216 9.12511 9.38362 9.28365 9.1986 9.39702C9.03457 9.49754 8.85574 9.57162 8.66867 9.61653C8.45768 9.66718 8.23347 9.66718 7.78505 9.66718H4.60008C3.57332 9.66718 3.05994 9.66718 2.66777 9.86701C2.3228 10.0428 2.04234 10.3232 1.86657 10.6682C1.66675 11.0604 1.66675 11.5738 1.66675 12.6005V21.4005C1.66675 22.4273 1.66675 22.9407 1.86657 23.3328C2.04234 23.6778 2.3228 23.9583 2.66777 24.134C3.05994 24.3339 3.57332 24.3339 4.60008 24.3339H7.78505C8.23347 24.3339 8.45768 24.3339 8.66867 24.3845C8.85574 24.4294 9.03457 24.5035 9.1986 24.604C9.38362 24.7174 9.54216 24.8759 9.85923 25.193L15.663 30.9968C16.4483 31.7821 16.841 32.1748 17.1782 32.2013C17.4707 32.2243 17.7566 32.1059 17.9471 31.8828C18.1667 31.6257 18.1667 31.0703 18.1667 29.9597V4.04136C18.1667 2.9307 18.1667 2.37537 17.9471 2.11822C17.7566 1.89509 17.4707 1.77668 17.1782 1.79971C16.841 1.82624 16.4483 2.21892 15.663 3.00427Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

VolumeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default VolumeIcon;
