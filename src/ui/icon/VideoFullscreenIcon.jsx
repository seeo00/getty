import PropTypes from 'prop-types';

const VideoFullscreenIcon = ({ width = 24, height = 24, color = '#e0e0e0', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.6667 5.5H14.3C11.2197 5.5 9.67957 5.5 8.50305 6.09946C7.46816 6.62677 6.62677 7.46816 6.09946 8.50305C5.5 9.67957 5.5 11.2197 5.5 14.3V14.6667M14.6667 38.5H14.3C11.2197 38.5 9.67957 38.5 8.50305 37.9005C7.46816 37.3732 6.62677 36.5318 6.09946 35.4969C5.5 34.3204 5.5 32.7803 5.5 29.7V29.3333M38.5 14.6667V14.3C38.5 11.2197 38.5 9.67957 37.9005 8.50305C37.3732 7.46816 36.5318 6.62677 35.4969 6.09946C34.3204 5.5 32.7803 5.5 29.7 5.5H29.3333M38.5 29.3333V29.7C38.5 32.7803 38.5 34.3204 37.9005 35.4969C37.3732 36.5318 36.5318 37.3732 35.4969 37.9005C34.3204 38.5 32.7803 38.5 29.7 38.5H29.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

VideoFullscreenIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default VideoFullscreenIcon;
