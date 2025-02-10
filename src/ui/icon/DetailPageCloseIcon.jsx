import PropTypes from 'prop-types';

const DetailPageCloseIcon = ({ width = 10, height = 18, color = '#aaa', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 10 18" fill="none" {...props}>
      <path d="M1 1L9 9L1 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

DetailPageCloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default DetailPageCloseIcon;
