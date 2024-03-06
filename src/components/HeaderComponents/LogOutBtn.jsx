const { Button } = require('@mui/material');

export const LogOutBtn = ({ id, onLogOutBtnClick }) => {
  const style = {
    display: { xs: id === 'headerBtn' ? 'none' : 'inline-block', md: 'block' },
    padding: '6px 30px',
    border: '2px solid',
    '&:hover': { border: '2px solid' },
    alignSelf: 'start',
    ml: 'auto',
    mr: 'auto',
  };

  return (
    <Button
      variant="outlined"
      type="button"
      sx={style}
      onClick={onLogOutBtnClick}
    >
      Log out
    </Button>
  );
};
