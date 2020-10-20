import { makeStyles, Container, Grid, Typography, Avatar, Button, List, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles(theme=>({
  cardIcon: {
    fontSize: theme.spacing(8),
    padding: theme.spacing(0.5),
  },
  cardRoot: {
    borderRadius: theme.shape.borderRadius,
    boxSizing: 'border-box',
    position: 'relative',
    '&:hover': {
      '& $cardContent': {
        clipPath: 'circle(100%)',
      }
    },
    boxShadow: theme.shadows[4],

  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 95,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.getContrastText(theme.palette.background.default),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  overlayPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  overlaySecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
  },
  cardContent: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    boxSizing: 'border-box',
    clipPath: `circle(${theme.spacing(5)}px at 50% ${theme.spacing(7)}px)`,
    transition: theme.transitions.create(['clip-path'], { duration: theme.transitions.duration.long }),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    zIndex: theme.zindex.card,
    textAlign: 'justify',
    // color: '#fff',
  },
}));

const Card = props => {
  const classes = useStyles();
  return (
    <div className={classes.cardRoot}>
      <div className={classes.cardContent}>
        <Typography align="center"><props.icon className={classes.cardIcon} /></Typography>
        {props.children}
      </div>
      <div className={clsx(classes.cardOverlay, { [classes.overlayPrimary]: props.color==="primary", [classes.overlaySecondary]: props.color==='secondary' })}>
        <Typography align="center" variant="h5">{props.header}</Typography>
        
      </div>
    </div>
  )
}

export default Card;
