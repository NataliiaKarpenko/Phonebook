import { Box, Avatar } from '@mui/material';

import { useIsLoggedIn } from '../IsLoggedInContext';
import { LogOutBtn } from './LogOutBtn';
import { stringUserAvatar } from 'utils/createAvatar';

export const UserMenu = ({ onLogOutBtnClick }) => {
  const { name } = useIsLoggedIn();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <Avatar {...stringUserAvatar(name)} />
      <LogOutBtn id="headerBtn" onLogOutBtnClick={onLogOutBtnClick} />
    </Box>
  );
};
