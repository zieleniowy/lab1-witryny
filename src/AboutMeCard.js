import { Paper, Container, Card, CardMedia, Avatar, Typography, Divider, Link, Button, Grid, ButtonGroup } from '@material-ui/core';
import { Email as EmailIcon, Call as CallIcon, ExpandLess as ExpandMoreIcon,  OpenInNew as ExternalIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: theme.shadows[8],
        // marginTop: theme.spacing(2),
        position: 'relative',
        paddingBottom: 36,
        overflow: 'hidden',
        maxWidth: 400,
        margin: '0 auto',
    },
    details: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        background: theme.palette.background.paper,
        transition: theme.transitions.create(['transform'], { duration: theme.transitions.duration.complex }),
        borderRadius: theme.shape.borderRadius,
        top: 0,
        transform: 'translateY(100%) translateY(-36px)',
        '&.active': {
            transform: 'translateY(0)',
        }
    },
    bg: {
        backgroundColor: theme.palette.background.paper,
        // backgroundImage: 'url(/backgrounds/tlo-1.jpg)',
        backgroundSize: 'cover'
        // height: 150,
    },
    avatar: {
        width: 150,
        height: 150,
        margin: '0 auto',
        position: 'relative',
        top: theme.spacing(8),
        marginBottom: theme.spacing(10),
        borderWidth: 2,
        borderStyle: 'solid',
        borderTopColor: theme.palette.secondary.dark,
        borderBottomColor: theme.palette.secondary.dark,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        backgroundColor: theme.palette.primary.light,
    },
    social: {
        backgroundColor: '#3b5998',
        color: 'white',
        '&:hover':{
            backgroundColor: '#2f4980',

        }
    },
    footBtn: {
        width: '100%',
        height: '100%',
        whiteSpace: 'nowrap',
    },
    textCenter: {
        textAlign: 'center',
    },
    expandIcon: {
        // transition: 'transform 0.3s',
        transition: theme.transitions.create(['transform'], { duration: theme.transitions.duration.complex }),
        '&.active': {
            transform: 'rotateZ(180deg)',
        }
    },
    buttons: {
        width: '100%',
        height: 36,
        boxSizing: 'border-box',
        borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
        '&.active': {
            borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`
        },
        '& button': {
            borderRadius: 0,
        }
    },
    desc: {
        paddingTop: theme.spacing(3),
    },
    link: {
        textDecoration: 'none',
    }

}));


const handleFbRedirect = ()=>window.open('http://www.linkedin.com/in/m-rynkowski', "_blank");

export default props=>{
    const classes = useStyles();
    const [opened, setOpen] = React.useState(false);
    const {i18n} = props;
    const backgroundImage = { backgroundImage: `url(${props.backgroundSrc})` }
    const handleClick = e=>setOpen(!opened);
    return (
        <Card className={classes.root}>
            <div className={classes.bg} style={backgroundImage}>
                <Avatar className={classes.avatar} src={props.profileSrc}/>
            </div>
            <Typography variant="h4" align="center">{i18n.name}</Typography>
            <Typography variant="caption" component="h5" align="center">{i18n.aboutMeSubheader}</Typography>
            <Divider variant="middle" className={classes.divider}/>
            <div className={classes.textCenter}>
                <a className={classes.link} href="mailto:m.rynkowski@zhr.pl"><Button><EmailIcon/>m.rynkowski@zhr.pl</Button></a>
                <a className={classes.link} href="tel:+48780177945"><Button><CallIcon/>+48 780 177 945</Button></a>
            </div>
            <div className={clsx(classes.details, { active: opened })}>
                <ButtonGroup variant="text" className={clsx(classes.buttons, { active: opened })}>
                    <Button onClick={handleClick} className={classes.footBtn}><ExpandMoreIcon className={clsx(classes.expandIcon, { active: opened })} />{opened?i18n.lessAbout:i18n.moreAbout}</Button>
                    <Button onClick={handleFbRedirect} className={`${classes.footBtn} ${classes.social}`}>Linkedin <ExternalIcon/></Button>
                </ButtonGroup>
                <Container>
                    <Typography className={classes.desc} variant="body1" align="justify">{i18n.aboutMe}</Typography>
                </Container>
            </div>

        </Card>
    )

}
