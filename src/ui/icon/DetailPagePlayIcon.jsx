import PropTypes from 'prop-types';

const DetailPagePlayIcon = ({ width = 17, height = 22, color = '#aaa', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.5 3.98951C1.5 3.01835 1.5 2.53277 1.70249 2.2651C1.87889 2.03191 2.14852 1.88761 2.4404 1.87018C2.77544 1.85017 3.17946 2.11953 3.98752 2.65823L14.5031 9.6686C15.1708 10.1137 15.5046 10.3363 15.6209 10.6168C15.7227 10.8621 15.7227 11.1377 15.6209 11.383C15.5046 11.6635 15.1708 11.886 14.5031 12.3312L3.98752 19.3415C3.17946 19.8802 2.77544 20.1496 2.4404 20.1296C2.14852 20.1122 1.87889 19.9679 1.70249 19.7347C1.5 19.467 1.5 18.9814 1.5 18.0103V3.98951Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DetailPagePlayIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default DetailPagePlayIcon;
