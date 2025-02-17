const ArrowLeftIcon = ({ size = 24, color = '#AAAAAA', ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M25 30L15 20L25 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowLeftIcon;
