import PropTypes from 'prop-types';

const TenSecondsAgoIcon = ({ width = 60, height = 60, color = '#aaa', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M25.9 34V33.31H27.54V27.71H26.23V27.18C26.55 27.1267 26.83 27.06 27.07 26.98C27.31 26.8933 27.5233 26.7933 27.71 26.68H28.34V33.31H29.83V34H25.9ZM33.1383 34.13C32.6849 34.13 32.2883 33.99 31.9483 33.71C31.6083 33.43 31.3483 33.0067 31.1683 32.44C30.9883 31.8733 30.8983 31.1633 30.8983 30.31C30.8983 29.4633 30.9883 28.7633 31.1683 28.21C31.3483 27.6567 31.6083 27.2433 31.9483 26.97C32.2883 26.69 32.6849 26.55 33.1383 26.55C33.5983 26.55 33.9949 26.69 34.3283 26.97C34.6616 27.2433 34.9183 27.6567 35.0983 28.21C35.2849 28.7633 35.3783 29.4633 35.3783 30.31C35.3783 31.1633 35.2849 31.8733 35.0983 32.44C34.9183 33.0067 34.6616 33.43 34.3283 33.71C33.9949 33.99 33.5983 34.13 33.1383 34.13ZM33.1383 33.47C33.4249 33.47 33.6783 33.3567 33.8983 33.13C34.1183 32.9033 34.2883 32.56 34.4083 32.1C34.5283 31.6333 34.5883 31.0367 34.5883 30.31C34.5883 29.5967 34.5283 29.01 34.4083 28.55C34.2883 28.09 34.1183 27.75 33.8983 27.53C33.6783 27.31 33.4249 27.2 33.1383 27.2C32.8516 27.2 32.5983 27.31 32.3783 27.53C32.1583 27.75 31.9849 28.09 31.8583 28.55C31.7383 29.01 31.6783 29.5967 31.6783 30.31C31.6783 31.0367 31.7383 31.6333 31.8583 32.1C31.9849 32.56 32.1583 32.9033 32.3783 33.13C32.5983 33.3567 32.8516 33.47 33.1383 33.47Z"
        fill={color}
      />
      <path
        d="M5 25C5 25 10.0125 18.1705 14.0846 14.0956C18.1567 10.0207 23.784 7.5 30 7.5C42.4264 7.5 52.5 17.5736 52.5 30C52.5 42.4264 42.4264 52.5 30 52.5C19.7423 52.5 11.0878 45.6357 8.37942 36.25M5 25V10M5 25H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TenSecondsAgoIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default TenSecondsAgoIcon;
