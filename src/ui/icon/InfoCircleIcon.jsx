import PropTypes from 'prop-types';

const InfoCircleIcon = ({ width = 30, height = 30, color = '#AAA', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.8359 20.6427V15.3094M14.8359 9.97607H14.8492M28.1692 15.3094C28.1692 22.6732 22.1997 28.6427 14.8359 28.6427C7.4721 28.6427 1.50256 22.6732 1.50256 15.3094C1.50256 7.94561 7.4721 1.97607 14.8359 1.97607C22.1997 1.97607 28.1692 7.94561 28.1692 15.3094Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

InfoCircleIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default InfoCircleIcon;
