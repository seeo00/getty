import { useState, useRef } from 'react';
import { color } from '../styled/common';
import { GuestUserIcon } from './icon';
import DropdownMenu from './DropdownMenu';

const UserButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const buttonRef = useRef(null);

  // 마우스가 버튼 위에 올라갔을 때 메뉴 열기
  const handleMouseEnter = (e) => {
    setAnchorEl(e.currentTarget);
  };

  // 마우스가 버튼에서 벗어났을 때 호출될 함수
  // 메뉴 자체에서도 마우스 이벤트를 처리하므로 여기서는 바로 닫지 않음
  const handleMouseLeave = () => {
    // 메뉴 컴포넌트에서 마우스 이벤트를 처리하므로 여기서는 아무 작업도 하지 않음
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <GuestUserIcon color={color.gray[70]} />
      </button>
      <DropdownMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseEnter={() => setAnchorEl(buttonRef.current)}
        onMouseLeave={() => setAnchorEl(null)}
      />
    </>
  );
};

export default UserButton;
