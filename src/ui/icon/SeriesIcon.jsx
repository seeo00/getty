import PropTypes from 'prop-types';

const SeriesIcon = ({ width = 20, height = 20, color = '#AAAAAA', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.5 1H12.6C14.8402 1 15.9603 1 16.816 1.43597C17.5686 1.81947 18.1805 2.43139 18.564 3.18404C19 4.03969 19 5.15979 19 7.4V14.5M4.2 19H12.3C13.4201 19 13.9802 19 14.408 18.782C14.7843 18.5903 15.0903 18.2843 15.282 17.908C15.5 17.4802 15.5 16.9201 15.5 15.8V7.7C15.5 6.57989 15.5 6.01984 15.282 5.59202C15.0903 5.21569 14.7843 4.90973 14.408 4.71799C13.9802 4.5 13.4201 4.5 12.3 4.5H4.2C3.0799 4.5 2.51984 4.5 2.09202 4.71799C1.71569 4.90973 1.40973 5.21569 1.21799 5.59202C1 6.01984 1 6.57989 1 7.7V15.8C1 16.9201 1 17.4802 1.21799 17.908C1.40973 18.2843 1.71569 18.5903 2.09202 18.782C2.51984 19 3.0799 19 4.2 19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SeriesIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default SeriesIcon;
