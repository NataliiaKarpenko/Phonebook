import { PatternFormat } from 'react-number-format';
import { styled } from '@mui/material';

const style = ({ theme, error }) => `

  width: calc(100% - 24px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 10px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? theme.grey[100] : theme.grey[700]};
  background: ${
    theme.palette.mode === 'dark' ? theme.grey[800] : theme.grey[50]
  };

  border: 1px solid ${
    error === 'true'
      ? '#e53935'
      : theme.palette.mode === 'dark'
      ? theme.grey[700]
      : theme.grey[300]
  };
  
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border: 1px solid ${error === 'true' ? '#d32f2f' : theme.blue[400]};
  }

  
  &:focus {
    outline: none; 
    border-color: ${error === 'true' ? '#c62828' : theme.blue[400]};
    box-shadow: ${
      error === 'false'
        ? `0 0 0 3px 
      ${theme.palette.mode} === 'dark'`
          ? theme.blue[600]
          : theme.blue[200]
        : ''
    };
    background: ${
      theme.palette.mode === 'dark' ? theme.grey[700] : theme.grey[100]
    };
`;

export const InputElement = styled('input')`
  ${style};
`;

export const InputPatternFormat = styled(PatternFormat)`
  ${style};
`;
