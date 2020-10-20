import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Toolbar, Typography, IconButton, Button, Drawer, Hidden, List, ListItem, ListItemText } from '@material-ui/core';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  fGrow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


export default function ButtonAppBar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleToggle = s=>e=> setOpen(!open);
  return (
    <div className={classes.fGrow}>
      <AppBar position="static">
        <Toolbar>
            <Link href='/'><Button color="inherit">{props.title}</Button></Link>
            <div className={classes.fGrow}></div>
            <Hidden xsDown>
             {props.links.map(link=><Link href={link.href} key={link.href}><Button color="inherit">{link.label}</Button></Link>)}
            </Hidden>
            <Hidden smUp>
                <IconButton color="inherit" onClick={handleToggle(true)}>
                    <MenuIcon />
                </IconButton>
            </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <Drawer anchor="bottom" open={open} onClose={handleToggle(false)}>
          <List>
           {props.links.map(link=><Link href={link.href} key={link.href}><ListItem button><ListItemText primary={link.label}/></ListItem></Link>)}
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
}