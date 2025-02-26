import * as S from './style';
import { Divider, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { color } from '../../styled/common';
import UserProfileIcon from '../../ui/icon/UserProfileIcon';
import TicketIcon from '../../ui/icon/TicketIcon';
import HelpIcon from '../../ui/icon/HelpIcon';
import LogoutIcon from '../../ui/icon/LogoutIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '../../ui/icon';
import { authActions } from '../../store/modules/slices/authSlice';

const UserDropdownMenu = ({ anchorEl, open, onClose, onMouseEnter, onMouseLeave }) => {
  const { authed, user } = useSelector((state) => state.authR);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    }, 100);

    onClose();
  };

  const nonLoginItems = [
    { id: 'login', label: '로그인', Icon: UserProfileIcon, onClick: () => navigate('/auth') },
    { id: 'ticket', label: '이용권', Icon: TicketIcon, onClick: () => navigate('/subscription') },
    { id: 'help', label: '고객센터', Icon: HelpIcon, onClick: onClose },
  ];

  const loginItems = [
    {
      id: 'profile',
      label: user.subscribed ? '프로필 전환' : '프로필 편집',
      Icon: UserProfileIcon,
      onClick: () => navigate('mypage/profile'),
    },
    {
      id: 'ticket',
      label: '이용권',
      Icon: TicketIcon,
      onClick: () => navigate('/subscription'),
    },
    { id: 'help', label: '고객센터', Icon: HelpIcon, onClick: onClose },
    {
      id: 'logout',
      label: '로그아웃',
      Icon: LogoutIcon,
      onClick: logout,
    },
  ];

  const menuItems = authed ? loginItems : nonLoginItems;

  const handleProfileClick = () => {
    navigate('/mypage');
    onClose();
  };

  return (
    <S.StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      disableAutoFocusItem={true}
      disableEnforceFocus={true} // 🔹 추가
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      MenuListProps={{
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
      }}
    >
      {authed && (
        <>
          <S.ProfileSection onClick={handleProfileClick}>
            <S.ProfileImage src={user.selectedProfile.profileImage} alt="프로필이미지" />
            <S.ProfileInfo>
              <S.ProfileType>게티프로필</S.ProfileType>
              <S.ProfileName>{user.selectedProfile.profileName}</S.ProfileName>
            </S.ProfileInfo>
            <ArrowRightIcon />
          </S.ProfileSection>
          <Divider style={{ backgroundColor: color.gray[500], margin: '16px 0' }} />
        </>
      )}
      {menuItems.map((item) => {
        const { Icon } = item;
        return (
          <S.StyledMenuItem key={item.id} onClick={item.onClick} disableRipple={true}>
            <div>
              <ListItemIcon>
                <Icon width={20} height={20} color={color.gray[70]} />
              </ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </div>
            {authed && item.id === 'ticket' && (
              <S.SubscriptionStatus>{user?.subscriptionPlan || '0'}</S.SubscriptionStatus>
            )}
          </S.StyledMenuItem>
        );
      })}
    </S.StyledMenu>
  );
};

export default UserDropdownMenu;
