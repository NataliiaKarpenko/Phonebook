import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, styled } from '@mui/material';

const LightThemeIcon = styled(LightModeIcon)(({ theme }) => ({
  fill: theme.palette.primary.main,
  transition: 'all 300ms ease-in-out',
  '&:hover': {
    fill: theme.palette.secondary.main,
    scale: '1.05',
  },
}));
const DarkThemeIcon = styled(NightlightRoundIcon)(({ theme }) => ({
  fill: theme.palette.primary.main,
  transition: 'all 300ms ease-in-out',
  '&:hover': {
    fill: theme.palette.secondary.main,
    scale: '1.05',
  },
}));

const style = {
  iconButton: {
    alignSelf: { xs: 'flex-start', md: 'center' },
    p: '1px',
    '&:hover': {
      background: 'transparent',
    },
  },
};

export const ToggleTheme = ({ handleThemeToggle, darkMode }) => {
  return (
    <IconButton
      aria-label="theme toggler"
      sx={style.iconButton}
      onClick={handleThemeToggle}
    >
      {darkMode ? <DarkThemeIcon /> : <LightThemeIcon />}
    </IconButton>
  );
};
