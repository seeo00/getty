const HelpIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M7.57533 7.50008C7.77125 6.94314 8.15795 6.4735 8.66695 6.17436C9.17596 5.87521 9.77441 5.76586 10.3563 5.86567C10.9382 5.96549 11.466 6.26802 11.8462 6.71969C12.2264 7.17136 12.4345 7.74302 12.4337 8.33342C12.4337 10.0001 9.93366 10.8334 9.93366 10.8334M10.0003 14.1667H10.0087M18.3337 10.0001C18.3337 14.6025 14.6027 18.3334 10.0003 18.3334C5.39795 18.3334 1.66699 14.6025 1.66699 10.0001C1.66699 5.39771 5.39795 1.66675 10.0003 1.66675C14.6027 1.66675 18.3337 5.39771 18.3337 10.0001Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HelpIcon;
