import { createTheme } from '@mui/material/styles';

const commonOverrides = {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: '100vh',
          padding: '0 20px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          marginBottom: 70,
          background: 'transparent',

          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 0,
          borderBottom: '4px solid transparent',
          borderImage:
            'linear-gradient(138deg, rgb(32,201,255) 36.7%, rgb(0,8,187) 84.4%, rgb(255,255,255) 119.7%)',
          borderImageSlice: 1,
          boxShadow: '0px 16px 15px -10px rgba(0,0,0,0.1)',
          width: '100%',
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: { justifyContent: 'space-between' },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: { boxShadow: 'none', background: 'inherit' },
      },
    },

    MuiMenuIcon: {
      styleOverrides: {
        root: { width: '80px' },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            color: '#fff',
            width: '100%',
            background: '#385170',
            '& .MuiFormHelperText-root': {
              position: 'absolute',
              top: '100%',
              fontSize: { xs: 12, md: 14 },
            },
          }),
          ...(ownerState.variant === 'standard' && {
            color: '#fff',
            fontSize: '40px',

            '& .MuiFormHelperText-root': {
              position: 'absolute',
              top: '100%',
              fontSize: { xs: 12, md: 14 },
            },
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          fontSize: 18,
          fontWeight: 500,
          minHeight: 0,
          minWidth: 0,
          p: 90,
        },
      },
    },
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: '#233142',
    containerBackground:
      'linear-gradient(109.6deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%)',
    menuBackground: '#22313f',
    primary: { main: '#d5eeff', light: '#d6e4f0', dark: '#acdcee' },
    secondary: { main: '#c8d9eb', light: '#2d4059', dark: '#393e46' },
    info: { main: '#e67a7a', dark: '#e46464' },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
    },
  },

  blue: {
    200: '#b6daff',
    400: '#3399FF',
    600: '#0072E5',
  },

  grey: {
    50: '#F3F6F9',
    100: '#E5EAF2',
    300: '#C7D0DD',
    700: '#434D5B',
    800: '#303740',
  },
  ...commonOverrides,

  // components: {
  //   MuiContainer: {
  //     styleOverrides: {
  //       root: {
  //         background:
  //           'linear-gradient(109.6deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%);',
  //         minHeight: '100vh',
  //         padding: '0 20px',
  //       },
  //     },
  //   },
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: {
  //         marginBottom: 70,
  //         background: 'transparent',

  //         paddingTop: 15,
  //         paddingBottom: 15,
  //         paddingLeft: 0,
  //         borderBottom: '4px solid transparent',
  //         borderImage:
  //           'linear-gradient(138deg, rgb(32,201,255) 36.7%, rgb(0,8,187) 84.4%, rgb(255,255,255) 119.7%)',
  //         borderImageSlice: 1,
  //         boxShadow: '0px 16px 15px -10px rgba(0,0,0,0.1)',
  //         width: '100%',
  //       },
  //     },
  //   },

  //   MuiToolbar: {
  //     styleOverrides: {
  //       root: { justifyContent: 'space-between' },
  //     },
  //   },

  //   MuiCard: {
  //     styleOverrides: {
  //       root: { boxShadow: 'none', background: 'inherit' },
  //     },
  //   },

  //   MuiMenuIcon: {
  //     styleOverrides: {
  //       root: { width: '80px' },
  //     },
  //   },

  //   MuiTextField: {
  //     styleOverrides: {
  //       root: ({ ownerState }) => ({
  //         ...(ownerState.variant === 'outlined' && {
  //           color: '#fff',
  //           width: '100%',
  //           background: '#385170',
  //           '& .MuiFormHelperText-root': {
  //             position: 'absolute',
  //             top: '100%',
  //             fontSize: { xs: 12, md: 14 },
  //           },
  //         }),
  //         ...(ownerState.variant === 'standard' && {
  //           color: '#fff',
  //           fontSize: '40px',

  //           '& .MuiFormHelperText-root': {
  //             position: 'absolute',
  //             top: '100%',
  //             fontSize: { xs: 12, md: 14 },
  //           },
  //         }),
  //       }),
  //     },
  //   },
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: 'inherit',
  //         fontSize: 18,
  //         fontWeight: 500,
  //         minHeight: 0,
  //         minWidth: 0,
  //         p: 90,
  //       },
  //     },
  //   },
  // },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    common: '#dfedf8',
    containerBackground:
      'linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)',
    menuBackground: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    primary: { main: '#4f5aa8', light: '#5f6caf', dark: '#272e6e' },

    secondary: { main: '#1f4287', light: '#fafafaf5', dark: '#f1f3fe' },
    info: { main: '#e67a7a', dark: '#e46464' },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
    },
  },

  blue: {
    200: '#b6daff',
    400: '#3399FF',
    600: '#0072E5',
  },

  grey: {
    50: '#F3F6F9',
    100: '#E5EAF2',
    300: '#C7D0DD',
    700: '#434D5B',
    800: '#303740',
  },

  ...commonOverrides,

  // components: {
  //   MuiContainer: {
  //     styleOverrides: {
  //       root: {
  //         background:
  //           'linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)',
  //         minHeight: '100vh',
  //         padding: '0 20px',
  //       },
  //     },
  //   },
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: {
  //         marginBottom: 70,
  //         background: 'transparent',
  //         paddingTop: 15,
  //         paddingBottom: 15,
  //         paddingLeft: 0,
  //         borderBottom: '4px solid transparent',
  //         borderImage:
  //           'linear-gradient(138deg, rgb(32,201,255) 36.7%, rgb(0,8,187) 84.4%, rgb(255,255,255) 119.7%)',
  //         borderImageSlice: 1,
  //         boxShadow: '0px 16px 15px -10px rgba(0,0,0,0.1)',
  //         width: '100%',
  //       },
  //     },
  //   },

  //   MuiToolbar: {
  //     styleOverrides: {
  //       root: { justifyContent: 'space-between' },
  //     },
  //   },

  //   MuiCard: {
  //     styleOverrides: {
  //       root: { boxShadow: 'none', background: 'inherit' },
  //     },
  //   },

  //   MuiMenuIcon: {
  //     styleOverrides: {
  //       root: { width: '80px' },
  //     },
  //   },

  //   MuiTextField: {
  //     styleOverrides: {
  //       root: ({ ownerState }) => ({
  //         ...(ownerState.variant === 'outlined' && {
  //           color: '#fff',
  //           width: '100%',
  //           background: '#eff7fd',
  //           '& .MuiFormHelperText-root': {
  //             position: 'absolute',
  //             top: '100%',
  //             fontSize: { xs: 12, md: 14 },
  //           },
  //         }),
  //         ...(ownerState.variant === 'standard' && {
  //           color: '#fff',
  //           fontSize: '40px',

  //           '& .MuiFormHelperText-root': {
  //             position: 'absolute',
  //             top: '100%',
  //             fontSize: { xs: 12, md: 14 },
  //           },
  //         }),
  //       }),
  //     },
  //   },
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: 'inherit',
  //         fontSize: 18,
  //         fontWeight: 500,
  //         minHeight: 0,
  //         minWidth: 0,
  //         p: 90,
  //       },
  //     },
  //   },
  // },
});
