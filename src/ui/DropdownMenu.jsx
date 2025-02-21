import { Menu, MenuItem } from '@mui/material';

const DropdownMenu = ({ anchorEl, open, onClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem onClick={onClose}>프로필</MenuItem>
      <MenuItem onClick={onClose}>설정</MenuItem>
      <MenuItem onClick={onClose}>로그아웃</MenuItem>
    </Menu>
  );
};

export default DropdownMenu;
