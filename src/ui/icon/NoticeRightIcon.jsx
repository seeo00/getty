import PropTypes from 'prop-types';

const NoticeRightIcon = ({ width = 10, height = 18, color = '#AAAAAA', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 17L9 9L1 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

NoticeRightIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default NoticeRightIcon;
