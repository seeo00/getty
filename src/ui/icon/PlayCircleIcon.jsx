import PropTypes from 'prop-types';

const PlayCircleIcon = ({ width = 24, height = 24, color = '#e0e0e0', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M42.836 84.9764C65.8478 84.9764 84.5026 66.3216 84.5026 43.3097C84.5026 20.2979 65.8478 1.64307 42.836 1.64307C19.8241 1.64307 1.16931 20.2979 1.16931 43.3097C1.16931 66.3216 19.8241 84.9764 42.836 84.9764Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.4193 30.6653C32.4193 28.6766 32.4193 27.6823 32.8349 27.1271C33.1971 26.6434 33.7514 26.3407 34.3542 26.2977C35.0459 26.2483 35.8823 26.786 37.5552 27.8614L57.2243 40.5058C58.6759 41.439 59.4017 41.9056 59.6524 42.4989C59.8715 43.0173 59.8715 43.6022 59.6524 44.1206C59.4017 44.7139 58.6759 45.1805 57.2243 46.1137L37.5552 58.7581C35.8823 59.8335 35.0459 60.3712 34.3542 60.3218C33.7514 60.2788 33.1971 59.9761 32.8349 59.4923C32.4193 58.9372 32.4193 57.9429 32.4193 55.9542V30.6653Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlayCircleIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default PlayCircleIcon;
