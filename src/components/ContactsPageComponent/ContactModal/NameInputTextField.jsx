import { TextField } from '@mui/material';

export const NameInputTextField = ({
  contactName,
  errorStateName,
  helperTextName,
}) => {
  return (
    <TextField
      name="name"
      label="Name"
      defaultValue={contactName}
      variant="standard"
      error={errorStateName}
      helperText={helperTextName}
      fullWidth
      sx={{
        mb: 5,
        '& .MuiFormHelperText-root.Mui-error': {
          lineHeight: 1,
        },
      }}
      InputLabelProps={{
        sx: {
          fontSize: { xs: '14px', md: '16px' },
        },
      }}
    />
  );
};
