import PropTypes from 'prop-types';

const DetailPageDropdownIcon = ({ width = 14, height = 8, color = '#AAAAAA', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L7 7L13 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

DetailPageDropdownIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default DetailPageDropdownIcon;
