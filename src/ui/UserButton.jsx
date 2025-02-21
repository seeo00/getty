import { useState } from 'react';
import { color } from '../styled/common';
import { GuestUserIcon } from './icon';
import DropdownMenu from './DropdownMenu';

const UserButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <button onClick={handleClick}>
        <GuestUserIcon color={color.gray[70]} />
      </button>
      <DropdownMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
    </>
  );
};

export default UserButton;
