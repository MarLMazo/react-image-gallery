import { createMuiTheme } from '@material-ui/core/styles';

export const MainTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#A89F68',
            main: '#41521F',
            contrastText: '#fff',
        },
        secondary: {
            light: '#F5FDC6',
            main: '#F5C396',
            contrastText: '#000',
        },
    },
    typography:{
        htmlFontSize: 16,
        fontFamily:['Chilanka','cursive',].join(','),
        h1 :{
            fontFamily:['Chilanka','cursive',].join(',')
        },
        h2 :{
            fontFamily:['Chilanka','cursive',].join(',')
        },
        h3 :{
            fontFamily:['Chilanka','cursive',].join(',')
        },
        h4 :{
            fontFamily:['Chilanka','cursive',].join(',')
        },
        h5 :{
            fontFamily:['Chilanka','cursive',].join(',')
        },
        h6 :{
            fontFamily:['Chilanka','cursive',].join(',')
        },
    }
})