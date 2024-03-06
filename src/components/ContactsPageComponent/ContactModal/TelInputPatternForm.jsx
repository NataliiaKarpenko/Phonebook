import { useState } from 'react';
import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';

export const TelInputPatternFormat = ({
  contactNumber,
  errorStateTel,
  helperTextTel,
}) => {
  const [number, setNumber] = useState(contactNumber);
  const [focused, setFocused] = useState(false);

  const onNumberChange = e => {
    const input = e.currentTarget;
    const value = input.value;

    setNumber(value);
    setFocused(true);
  };

  const label = 'Telephone number';

  return (
    <TextField
      type="tel"
      name="number"
      defaultValue={contactNumber}
      variant="standard"
      focused={focused}
      fullWidth
      title="+ ##(###) ###-##-##"
      onChange={onNumberChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      autoComplete="off"
      error={errorStateTel}
      label={label}
      helperText={helperTextTel}
      sx={{
        mb: 6,
        '& .MuiFormHelperText-root.Mui-error': {
          lineHeight: 1,
        },
      }}
      InputProps={{
        inputComponent: PatternFormat,
        inputProps: { format: '+ ##(###) ###-##-##', mask: '_' },
      }}
      InputLabelProps={{
        shrink: number || focused ? true : false,
        sx: { fontSize: { xs: '14px', md: '16px' } },
      }}
    />
  );
};
