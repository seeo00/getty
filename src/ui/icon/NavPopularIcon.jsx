import PropTypes from 'prop-types';

const NavPopularIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      {...props}
    >
      <path
        d="M10.2827 2.45332C10.5131 1.98638 10.6284 1.75291 10.7848 1.67831C10.9209 1.61341 11.0791 1.61341 11.2152 1.67831C11.3717 1.75291 11.4869 1.98638 11.7174 2.45332L13.9041 6.88328C13.9721 7.02113 14.0061 7.09006 14.0558 7.14358C14.0999 7.19096 14.1527 7.22935 14.2113 7.25662C14.2776 7.28742 14.3536 7.29854 14.5057 7.32077L19.397 8.03571C19.9121 8.11099 20.1696 8.14863 20.2888 8.27444C20.3925 8.38389 20.4412 8.5343 20.4215 8.68377C20.3988 8.85558 20.2124 9.03718 19.8395 9.40038L16.3014 12.8464C16.1912 12.9538 16.136 13.0076 16.1004 13.0715C16.0689 13.128 16.0487 13.1902 16.0409 13.2545C16.0321 13.3271 16.0451 13.403 16.0711 13.5547L16.906 18.4221C16.994 18.9355 17.038 19.1922 16.9553 19.3445C16.8833 19.477 16.7554 19.57 16.6071 19.5975C16.4366 19.6291 16.2061 19.5078 15.7451 19.2654L11.3724 16.9658C11.2361 16.8942 11.168 16.8584 11.0962 16.8443C11.0327 16.8318 10.9673 16.8318 10.9038 16.8443C10.832 16.8584 10.7639 16.8942 10.6277 16.9658L6.25492 19.2654C5.79392 19.5078 5.56341 19.6291 5.39297 19.5975C5.24468 19.57 5.11672 19.477 5.04474 19.3445C4.962 19.1922 5.00603 18.9355 5.09407 18.4221L5.92889 13.5547C5.95491 13.403 5.96793 13.3271 5.95912 13.2545C5.95132 13.1902 5.93111 13.128 5.89961 13.0715C5.86402 13.0076 5.80888 12.9538 5.69859 12.8464L2.16056 9.40038C1.78766 9.03718 1.60121 8.85558 1.57853 8.68377C1.55879 8.5343 1.60755 8.38389 1.71125 8.27444C1.83044 8.14863 2.08797 8.11099 2.60304 8.03571L7.49431 7.32077C7.64642 7.29854 7.72248 7.28742 7.78872 7.25662C7.84736 7.22935 7.90016 7.19096 7.94419 7.14358C7.99391 7.09006 8.02793 7.02113 8.09597 6.88328L10.2827 2.45332Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

NavPopularIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default NavPopularIcon;
