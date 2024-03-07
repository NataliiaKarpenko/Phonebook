import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material';

import phone from '../images/phone.png';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

const Instruction = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

const style = {
  title: {
    textAlign: 'center',
    marginBottom: { xs: 3, md: 10 },
    fontWeight: 700,
    fontSize: { xs: 30, md: 48 },
  },
  box: {
    width: { xs: 'calc(100% - 20%)', lg: 'calc(100% - 30%)' },
    display: { xs: 'block', md: 'flex' },
    gap: { md: 5, lg: 10 },
    alignItems: 'center',
    ml: 'auto',
    mr: 'auto',
  },
  card: {
    width: { md: 900, lg: 1300 },
    mb: { xs: 3, md: 0 },
  },
  description: {
    marginBottom: 2,
    fontWeight: 600,
    fontSize: { md: 22, lg: 28 },
    textAlign: { xs: 'center', md: 'left' },
  },
  instruction: {
    fontWeight: 600,
    fontSize: { md: 18, lg: 25 },
    textAlign: { xs: 'center', md: 'left' },
  },
};

export const HomePageComponent = () => {
  return (
    <div style={{ marginBottom: '-60px' }}>
      <Title variant="h1" gutterBottom sx={style.title}>
        Phonebook App
      </Title>
      <Box sx={style.box}>
        <Card sx={style.card}>
          <img src={phone} alt="phone" className="homePageImage" />
        </Card>
        <Card>
          <Description sx={style.description}>
            can completely and efficiently organize your contacts and eliminate
            any duplicate entries. It also comes with the filter to find the
            contacts you are looking for.
          </Description>
          <Instruction sx={style.instruction}>
            Please, log in or register to start working with the Phonebook App
            <span role="img" aria-label="Pointer finger icon">
              👆
            </span>
          </Instruction>
        </Card>
      </Box>
    </div>
  );
};
