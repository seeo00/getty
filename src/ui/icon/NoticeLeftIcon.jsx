import PropTypes from 'prop-types';

const NoticeLeftIcon = ({ width = 10, height = 18, color = '#AAAAAA', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 17L1 9L9 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

NoticeLeftIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default NoticeLeftIcon;
