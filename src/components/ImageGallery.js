import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Container,
    GridList,
    GridListTile,
    GridListTileBar,
    Modal,
    Backdrop,
    Fade,
    Box,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';
import {Clear} from '@material-ui/icons';
import Image from 'material-ui-image'

const useStyles = makeStyles((theme) => ({
    container:{
        marginTop: '30px'
    },
    pagination:{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '0.5rem'
    },
    imageItem:{
        '&:hover':{
            cursor: 'pointer'
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    paper: {
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        padding: 'auto',
        width: '650px',
        textAlign: 'center',
        borderRadius: '5px'
    },
    modalExitBtn:{
        position: 'absolute',
        right:0,
        top: 0,
        color:'#fff',
        zIndex: '999',
        '&:hover':{
            cursor: 'pointer'
        }
    }
}));
 



const ImageGallery = (props) =>{
    // const theme = useTheme();
    // const keys = [...theme.breakpoints.keys].reverse();
    const classes = useStyles();
    const [pageNum, setPageNum] = useState(1);
    const [tileData, setTileData] = useState([]);
    const [currentImg, setCurrentImg] = useState({
        author: "",
        download_url: "",
        height: null,
        id: null,
        url: "",
        width: null
    });
    const [openLightBox, setOpenLightBox] = useState(false);
    
    useEffect(()=>{
        axios.get(`https://picsum.photos/v2/list?page=${pageNum+2}&limit=12`)
            .then((res)=>{
                setTileData(res.data);    
            })
            .catch(err=>console.log(err))
    }, [pageNum]);

    // const GetGridListCols = () => {
     
        
    //     return(
    //         keys.reduce((output, key) => {
    //             const matches = useMediaQuery(theme.breakpoints.up(key));
    //             return (!output && matches) 
    //                 ? (key ==='xl' || key ==='lg') ? 3 : (key ==='md') ? 2 : 1
    //                 : output       
    //         }, null)
    //     );
        
    // };
    
    const handlePageChange= (event, value)=>{ 
        setPageNum(value);
    };

    const onClickImage = (id)=>{
        let getSpecificImage = tileData.find((image)=>image.id === id);
        setCurrentImg(getSpecificImage);
        // console.log(currentImg)
        setOpenLightBox(!openLightBox);
    };

    const handleCloseLightBox = () => {
        setOpenLightBox(false);
    };

  
    return(     
        <Container className={classes.container}>
            <Pagination
                className={classes.pagination}
                color='secondary'
                count={10}
                shape="rounded"
                showFirstButton
                showLastButton 
                page={pageNum}
                onChange={handlePageChange}
                
            />
             <GridList cellHeight={300} cols={props.screenSize}>
                {tileData.map((tile) => (
                <GridListTile key={tile.id} className={classes.gridItem}>
                    <Box>
                        <Image 
                            alt={tile.url}
                            src={`https://picsum.photos/id/${tile.id}/530/300.webp`}
                            className={classes.imageItem}
                            aspectRatio={(4/3)}
                            disableSpinner
                            onClick={onClickImage.bind(this,tile.id)}
                        />
                        <GridListTileBar
                        title={<span> #ID: {tile.id}</span>}
                        subtitle={<span> by: {tile.author}</span>}
                        />
                    </Box>
                    
                </GridListTile>
                ))}
            </GridList>
            <Pagination 
                className={classes.pagination}
                count={10}
                color='secondary'
                shape="rounded"
                showFirstButton
                showLastButton 
                page={pageNum}
                onChange={handlePageChange}
            />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openLightBox}
                onClose={handleCloseLightBox}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={openLightBox}>
                    <Box className={classes.paper}>
                        <Button
                            className={classes.modalExitBtn}
                            onClick={handleCloseLightBox}
                        >
                            <Clear fontSize="large" />
                        </Button>  
                        <Image 
                            src={`https://picsum.photos/id/${currentImg.id}/852/480.webp` || ''}
                            alt={currentImg.url || ''}
                            disableSpinner
                            style={{ width: '100%'}}
                        />
                        <Typography>
                            Created by: {currentImg.author || ''}
                        </Typography>
                    </Box>
                    
                </Fade>
            </Modal>
        </Container>
    );

}

export default ImageGallery;