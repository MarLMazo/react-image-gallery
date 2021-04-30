import React from 'react';
import {
    Container,
    Typography,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container:{
        margin: 'auto',
        marginTop: '1rem',
        marginBottom: '1rem',
        textAlign: 'center'
    },
    mainHeading:{
        fontSize: '2rem',
    }
}));
  
const ImageTitle = () =>{
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <Typography 
                className={classes.mainHeading}
                variant='h1'
            >React JS Photo Gallery</Typography>
            <Typography 
                className={classes.subHeading}
            >Created by MarL Mazo</Typography>
        </Container>
    )
}

export default ImageTitle;