const NavDramaIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      {...props}
    >
      <path
        d="M16 1L11 5L6 1M5.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H5.8C4.11984 5 3.27976 5 2.63803 5.32698C2.07354 5.6146 1.6146 6.07354 1.32698 6.63803C1 7.27976 1 8.11984 1 9.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NavDramaIcon;
