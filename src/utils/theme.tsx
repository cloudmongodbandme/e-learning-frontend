import { createTheme } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: lightBlue[800],
        },
        info: {
            main: '#000',
        },
    },
};

const theme = createTheme(themeOptions, {
    components: {
        MuiModal: {
            styleOverrides: {
                root: {
                    borderRadius: '15px',
                },
            },
        },

        MuiButton: {
            defaultProps: {},
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: '4px 16px',
                    borderRadius: '1.2rem',
                    minWidth: '100px',
                    fontSize: '1.4rem',
                    fontWeight: '700',

                    // '&:hover': {
                    //     opacity: 0.7,
                    // },
                }),
                iconSizeSmall: {
                    '& > *:first-child': {
                        fontSize: '1.4rem',
                    },
                },
                iconSizeMedium: {
                    '& > *:first-child': {
                        fontSize: '1.4rem',
                    },
                },
                iconSizeLarge: {
                    '& > *:first-child': {
                        fontSize: '1.4rem',
                    },
                },
                startIcon: {
                    '& > *:first-child': {
                        fontSize: '1.4rem',
                    },
                },
            },
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        background: themeOptions.palette.primary.main,
                        // color: 'rgb(0, 17, 34)',
                        boxShadow: `${themeOptions.palette.secondary.main} 0px 0.35rem 0px`,
                        fontSize: '1.2rem',
                    },
                },
            ],
        },
    },
});

export default theme;
