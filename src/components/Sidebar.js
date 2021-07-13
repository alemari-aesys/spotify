import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getArtists, getPlaylists, getPodcasts } from '../redux/reducers/AppBarReducer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  button: {
      margin: theme.spacing(1)
  }
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Button variant="contained" onClick={() => {dispatch(getPlaylists())}}>Playlist</Button>
                <Button style={{marginLeft: "10px"}} variant="contained" onClick={() => {dispatch(getPodcasts())}} >Podcast</Button>
                <Button style={{marginLeft: "10px"}} variant="contained" onClick={() => {dispatch(getArtists())}}>Artisti</Button>
                <Button style={{marginLeft: "10px"}} variant="contained">Album</Button>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <div><MusicNoteIcon/> <h1 style={{fontFamily: "Cambria", marginLeft: "20px"}}>SPOTIFY</h1></div>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon> 
                        <HomeIcon /> 
                    </ListItemIcon> 
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon> 
                        <SearchIcon /> 
                    </ListItemIcon> 
                    <ListItemText primary="Cerca" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon> 
                        <LibraryMusicIcon /> 
                    </ListItemIcon> 
                    <ListItemText primary="La tua libreria" />
                </ListItem>

            </List>
            <Divider />
            <List>
            <ListItem button>
                    <ListItemIcon> 
                        <FavoriteIcon /> 
                    </ListItemIcon> 
                    <ListItemText primary="Brani preferiti" />
                </ListItem>
            </List>
        </Drawer>
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </main>
        </div>
  );
}