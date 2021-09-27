import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },

    palette: {
        primary: {
            main: '#FFC72C',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

export default theme;
