import { alpha, createTheme } from '@mui/material'

const finalTheme = createTheme({
  palette: {
    primary: {
      main: 'rgba(31,160,232,1)',
    },
    error: {
      main: '#FF4949',
    },
    warning: {
      main: '#FFC107',
    },
    success: {
      main: '#17C883',
    },
    background: {
      paper: 'rgba(245,248,250,0.04)',
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontFamily: [
      'PingFang SC',
      'tahoma',
      'Hiragino Sans GB',
      'Microsoft YaHei',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h1',
          },
          style: {
            fontSize: '24px',
            color: 'rgba(46,67,105,0.65)',
            letterSpacing: 0,
          },
        },
        {
          props: {
            variant: 'h2',
          },
          style: {
            fontSize: '20px',
            color: 'rgba(46,67,105,0.65)',
            letterSpacing: 0,
          },
        },
        {
          props: {
            variant: 'h3',
          },
          style: {
            fontSize: '16px',
            color: 'rgba(46,67,105,0.65)',
            letterSpacing: 0,
          },
        },
        {
          props: {
            variant: 'h4',
          },
          style: {
            fontSize: '14px',
            color: 'rgba(46,67,105,0.65)',
            letterSpacing: 0,
          },
        },
        {
          props: {
            variant: 'h5',
          },
          style: {
            fontSize: '12px',
            color: 'rgba(46,67,105,0.65)',
            letterSpacing: 0,
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        sizeSmall: ({ theme }) => ({
          height: '24px',
          lineHeight: '24px',
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          borderRadius: '12px',
        }),
        sizeMedium: ({ theme }) => ({
          height: '32px',
          lineHeight: '32px',
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          borderRadius: '16px',
        }),
        sizeLarge: ({ theme }) => ({
          height: '40px',
          lineHeight: '40px',
          width: '232px',
          textAlign: 'center',
          borderRadius: '20px',
        }),
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': {
            background: '#4CB3ED ',
            boxShadow: 'none',
          },
          '&:active': {
            background: '#1B98DD',
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            background: 'rgba(31,160,232,0.50)',
            color: '#FFFFFF',
          },
        }),
        outlined: {
          '&.Mui-disabled': {
            background: 'rgba(46,67,105,0.05)',
            borderColor: 'rgba(46,67,105,0.25)',
            color: 'rgba(46,67,105,0.45)',
          },
        },
        outlinedPrimary: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          background: '#FFFFFF',

          '&:hover': {
            background: 'rgba(31,160,232,0.05)',
          },

          '&:active': {
            background: 'rgba(31,160,232,0.1)',
          },
        }),
        outlinedError: ({ theme }) => ({
          borderColor: theme.palette.error.main,
          color: theme.palette.error.main,
          background: '#FFFFFF',

          '&:hover': {
            background: alpha(theme.palette.error.main, 0.05),
            borderColor: alpha(theme.palette.error.main, 0.5),
          },

          '&:active': {
            background: alpha(theme.palette.error.main, 0.05),
            borderColor: alpha(theme.palette.error.main, 1),
          },
        }),
        outlinedSecondary: ({ theme }) => ({
          borderColor: 'rgba(46,67,105,0.45)',
          color: 'rgba(46,67,105,0.85)',
          background: '#FFFFFF',

          '&:hover': {
            background: alpha(theme.palette.primary.main, 0.05),
            borderColor: alpha(theme.palette.primary.main, 0.4),
            color: theme.palette.primary.main,
          },

          '&:active': {
            background: alpha(theme.palette.primary.main, 0.05),
            borderColor: alpha(theme.palette.primary.main, 1),
            color: alpha(theme.palette.primary.main, 1),
          },
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          borderRadius: 1,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: '48px',
          borderWidth: '1px',
          color: 'rgba(46,67,105,0.85)',
          '& fieldset': {
            borderColor: 'rgba(46,67,105,0.25)',
            borderWidth: '1px',
          },
          '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
          },
          '&:hover fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(46,67,105,0.25)',
            borderWidth: '1px',
          },
          '&.Mui-focused:hover fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: '#1FA0E8',
            borderWidth: '1px',
          },
          '&.Mui-error': {
            '&:hover fieldset': {
              borderColor: theme.palette.error.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.error.main,
            },
            '&.Mui-focused:hover fieldset': {
              borderColor: theme.palette.error.main,
            },
          },
        }),
        input: {
          fontSize: '14px',
          height: '48px',
          lineHeight: '48px',
          paddingTop: 0,
          paddingBottom: 0,
          '&.Mui-disabled': {
            color: '#A5AAB9',
            '-webkit-text-fill-color': '#A5AAB9',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(46,67,105,0.35)',
          fontSize: '14px',
          '&.Mui-focused': {
            fontSize: '12px',
            letterSpacing: 0,
            lineHeight: '17px',
            fontWeight: 400,
          },
        },
      },
    },
  },
})

export default finalTheme
