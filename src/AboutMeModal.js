import AboutMeCard from './AboutMeCard';
import { Backdrop, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme=>({
    backdrop: {
        zIndex: theme.zIndex.drawer-10,
        backgroundColor: theme.palette.background.backdrop,
        backdropFilter: 'blur(3px) grayscale(90%)',
    }
}));
const AboutMeModal = props =>{
    const classes = useStyles();
    const handleClose = e=>props.toggleDialog(false);
    const stopPropagation = e=>e.stopPropagation();
    return (
        <Backdrop open={props.open} onClick={handleClose} className={classes.backdrop}>
            <div onClick={stopPropagation}>
                <AboutMeCard/>
            </div>
        </Backdrop>
    )
}

export default AboutMeModal;
