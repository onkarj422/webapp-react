import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import createPalette from '@material-ui/core/styles/createPalette';

export default createMuiTheme({
    palette: createPalette({
        type: 'light',
        primary: {
            main: '#4d3c5c'
        },
        secondary: {
            main: '#ffefad'
        },
        error: red,
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2
    }),
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: 'white'
            }
        },
        MuiTypography: {
            colorTextSecondary: {
                color: 'white'
            }
        }
    }
});