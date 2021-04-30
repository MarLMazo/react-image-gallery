import React from 'react';
import ImageGallery from './ImageGallery';
import ImageTitle from './ImageTitle';
import { ThemeProvider } from '@material-ui/core/styles';
import {MainTheme} from '../themeStyle';
import '../themeStyle/App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const App = ()=> {
    const theme = useTheme();

    const screenExtraLarge = useMediaQuery(theme.breakpoints.only('xl'));
    const screenLarge = useMediaQuery(theme.breakpoints.only('lg'));
    const screenMedium = useMediaQuery(theme.breakpoints.only('md'));
    const screenSmall = useMediaQuery(theme.breakpoints.only('sm'));
    const screenExtraSmall = useMediaQuery(theme.breakpoints.only('xs'));
    const screenNarrow = useMediaQuery('(max-width:340px)');

    const getScreenWidth = () => {
        if (screenExtraLarge) {
          return 3;
        } else if (screenNarrow) {
          return 1;
        } else if (screenLarge) {
          return 3;
        } else if (screenMedium) {
          return 2;
        } else if (screenSmall) {
          return 1;
        } else if (screenExtraSmall) {
          return 1;
        } else {
          return 1;
        }
    }

    return (
        <ThemeProvider theme={MainTheme}>
            <div className="App">  
                <ImageTitle />
                <ImageGallery screenSize ={getScreenWidth()} />
            </div>
        </ThemeProvider>   
    )  
}

export default App;
