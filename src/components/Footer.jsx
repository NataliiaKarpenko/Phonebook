import { Box, Typography, styled } from '@mui/material';

const style = {
  box: {
    position: 'absolute',
    height: '60px',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
  },
  text: { fontSize: { xs: 14, md: 16 } },
};

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const Footer = () => {
  return (
    <Box sx={style.box}>
      <Text sx={style.text}>Phonebook App &copy; Natalia Karpenko, 2023</Text>
    </Box>
  );
};
