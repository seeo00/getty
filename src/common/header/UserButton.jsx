import * as S from './style';
import { useState, useRef, useEffect } from 'react';
import { GuestUserIcon } from '../../ui/icon';
import UserDropdownMenu from './UserDropdownMenu';
import { color } from '../../styled/common';
import { useSelector } from 'react-redux';

const UserButton = () => {
  const { authed, user } = useSelector((state) => state.authR);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const buttonRef = useRef(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (e) => {
    if (isDesktop) setAnchorEl(e.currentTarget);
  };

  const handleClick = (e) => {
    if (!isDesktop) {
      setAnchorEl((prev) => (prev ? null : e.currentTarget));
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    buttonRef.current?.focus();
  };

  return (
    <>
      <button ref={buttonRef} onMouseEnter={handleMouseEnter} onClick={handleClick}>
        {authed && user.selectedProfile.profileImage ? (
          <S.ProfileImage src={user.selectedProfile.profileImage} alt="프로필이미지" width="36px" height="36px" />
        ) : (
          <GuestUserIcon color={color.gray[70]} />
        )}
      </button>
      <UserDropdownMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseEnter={isDesktop ? () => setAnchorEl(buttonRef.current) : undefined}
        onMouseLeave={isDesktop ? () => setAnchorEl(null) : undefined}
      />
    </>
  );
};

export default UserButton;
