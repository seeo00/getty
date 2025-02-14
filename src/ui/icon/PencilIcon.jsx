import PropTypes from 'prop-types';

const PencilIcon = ({ width = 24, height = 24, color = '#AAAAAA', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17 8.83624L13 4.83624M1.5 20.3362L4.88437 19.9602C5.29786 19.9143 5.5046 19.8913 5.69785 19.8287C5.86929 19.7732 6.03245 19.6948 6.18289 19.5956C6.35245 19.4838 6.49955 19.3367 6.79373 19.0425L20 5.83624C21.1046 4.73167 21.1046 2.94081 20 1.83624C18.8955 0.731671 17.1046 0.73167 16 1.83624L2.79373 15.0425C2.49955 15.3367 2.35246 15.4838 2.24064 15.6534C2.14143 15.8038 2.06301 15.967 2.00751 16.1384C1.94496 16.3316 1.92198 16.5384 1.87604 16.9519L1.5 20.3362Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PencilIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default PencilIcon;
