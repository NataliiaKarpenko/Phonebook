import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const Button = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: 'transparent',
  },
}));

const style = {
  display: { md: 'none' },
  p: 0,
  transition: 'all 250ms ease-in-out',
};

export const MenuBtn = ({ toggleDrawer }) => {
  return (
    <Button
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={toggleDrawer('left', true)}
      sx={style}
    >
      <MenuIcon sx={{ fontSize: 35 }} />
    </Button>
  );
};
