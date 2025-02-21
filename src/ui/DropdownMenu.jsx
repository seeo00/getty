import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import styled from 'styled-components';
import { color } from '../styled/common';
import UserProfileIcon from './icon/UserProfileIcon';
import TicketIcon from './icon/TicketIcon';
import HelpIcon from './icon/HelpIcon';

const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    border-radius: 0 !important;
    background-color: ${color.gray[800]} !important;
    color: ${color.gray[70]};
    top: 70px !important;
    ul {
      padding: 16px 28px;
      margin-top: 0;
      width: 200px;
      li {
        padding: 12px;
        background-color: transparent !important;
        &:hover {
          color: ${color.white};
          .MuiListItemIcon-root svg {
            stroke: #fff !important;
          }
        }
      }
    }
  }
  & .MuiTypography-root {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`;

const DropdownMenu = ({ anchorEl, open, onClose, onMouseEnter, onMouseLeave }) => {
  const menuItems = [
    {
      id: 'login',
      label: '로그인',
      Icon: UserProfileIcon,
      onClick: onClose,
    },
    {
      id: 'ticket',
      label: '이용권',
      Icon: TicketIcon,
      onClick: onClose,
    },
    {
      id: 'support',
      label: '고객센터',
      Icon: HelpIcon,
      onClick: onClose,
    },
  ];

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      MenuListProps={{
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
      }}
      disableRipple={true}
    >
      {menuItems.map((item) => {
        const { Icon } = item;
        return (
          <MenuItem key={item.id} onClick={item.onClick} disableRipple={true}>
            <ListItemIcon>
              <Icon width={20} height={20} color="#aaa" />
            </ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        );
      })}
    </StyledMenu>
  );
};

export default DropdownMenu;
