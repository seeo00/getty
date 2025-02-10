import PropTypes from 'prop-types';

const DetailPageCommentIcon = ({ width = 44, height = 44, color = '#aaa', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.8333 15.5833H22M12.8333 22H27.5M17.7535 33H29.7C32.7803 33 34.3204 33 35.4969 32.4005C36.5318 31.8732 37.3732 31.0318 37.9005 29.9969C38.5 28.8204 38.5 27.2803 38.5 24.2V14.3C38.5 11.2197 38.5 9.67957 37.9005 8.50305C37.3732 7.46816 36.5318 6.62677 35.4969 6.09946C34.3204 5.5 32.7803 5.5 29.7 5.5H14.3C11.2197 5.5 9.67957 5.5 8.50305 6.09946C7.46816 6.62677 6.62677 7.46816 6.09946 8.50305C5.5 9.67957 5.5 11.2197 5.5 14.3V37.2818C5.5 38.2586 5.5 38.7471 5.70025 38.998C5.87441 39.2161 6.13849 39.3431 6.41766 39.3428C6.73865 39.3424 7.12006 39.0373 7.88289 38.427L12.2562 34.9284C13.1496 34.2136 13.5963 33.8563 14.0937 33.6022C14.535 33.3767 15.0048 33.2119 15.4902 33.1123C16.0374 33 16.6094 33 17.7535 33Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DetailPageCommentIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default DetailPageCommentIcon;
