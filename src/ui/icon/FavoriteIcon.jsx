import PropTypes from 'prop-types';

const FavoriteIcon = ({ width = 24, height = 24, color = '#e0e0e0', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8257 4.54015C13.8266 1.03403 8.82556 0.0908896 5.06798 3.30145C1.3104 6.512 0.781389 11.8799 3.73223 15.677C6.18566 18.8341 13.6106 25.4926 16.0441 27.6477C16.3163 27.8888 16.4525 28.0093 16.6113 28.0567C16.7498 28.0981 16.9015 28.0981 17.0401 28.0567C17.1989 28.0093 17.335 27.8888 17.6072 27.6477C20.0407 25.4926 27.4657 18.8341 29.9191 15.677C32.8699 11.8799 32.4055 6.47823 28.5833 3.30145C24.7612 0.124662 19.8247 1.03403 16.8257 4.54015Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

FavoriteIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default FavoriteIcon;
