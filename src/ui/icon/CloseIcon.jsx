const CloseIcon = ({ width = 24, height = 24, stroke = 'white', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M25.5 10.5L10.5 25.5M10.5 10.5L25.5 25.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
