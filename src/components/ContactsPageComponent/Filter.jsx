import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const style = {
  box: {
    ml: 'auto',
    mr: 'auto',
    mb: 5,
    width: { sm: '200px', md: '300px' },
    maxWidth: { xs: '200px', sm: '200px', md: '300px' },
  },
  input: {
    '&.MuiInputBase-root.MuiInput-root.MuiInput-underline:hover:before': {
      borderBottom: '1px solid #1977D3',
    },
  },
};

export const Filter = ({ handleFilter }) => {
  return (
    <Box sx={style.box}>
      <FormControl variant="standard" sx={{ width: '100%' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter a name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          fullWidth
          onChange={handleFilter}
          sx={style.input}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};
