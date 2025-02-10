import PropTypes from 'prop-types';

const DetailPageLayerIcon = ({ width = 44, height = 44, color = '#aaa', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.71436 39.2852H23.5715C25.3072 39.2852 26.7144 37.878 26.7144 36.1423V23.5709C26.7144 21.8351 25.3072 20.428 23.5715 20.428H4.71436C2.97856 20.428 1.5715 21.8351 1.5715 23.5709V36.1423C1.5715 37.878 2.97856 39.2852 4.71436 39.2852Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.42892 12.5706H31.4289C32.2625 12.5706 33.0619 12.9017 33.6513 13.4911C34.2406 14.0805 34.5718 14.8799 34.5718 15.7134V31.4277"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7144 4.714H39.2859C40.1194 4.714 40.9188 5.04526 41.5082 5.63455C42.0976 6.22383 42.4287 7.02338 42.4287 7.85686V25.1426"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DetailPageLayerIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default DetailPageLayerIcon;
