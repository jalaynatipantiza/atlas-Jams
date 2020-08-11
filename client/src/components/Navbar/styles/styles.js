import { makeStyles, fade } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  nav: {
    zIndex: 2,
    position: "fixed",
    width: "100vw",

  },
  toolbar: {
    display: "flex", 
    justifyContent: "space-between", 
    color: "white", 
    backgroundColor: "none",
  },
  toolbar2: {
    display: "flex", 
    justifyContent: "space-between", 
    color: "black", 
    backgroundColor: "white",
    // backgroundColor: theme.primary
  },
  toolbarColor: {
    display: "flex", 
    justifyContent: "space-between", 
    color: "black", 
    // backgroundColor: "#77828D"
    backgroundColor: "white",
  },
  appBar: {
    position: "fixed",
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  appBar2: {
    position: "fixed",
    backgroundColor: "transparent"
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSearch: {
    margin: '3px auto auto auto',
  },
  mainPic: {
    backgroundImage:  "url('https://images.unsplash.com/photo-1562763563-49cabb8f45ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
    height: "100vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  div: {
    height: "100vh",
    width: "100vw"
  },
  searchbar: {
    display: 'flex',
    position: 'relative',
    borderRadius: "20px",
    backgroundColor: "white",
    paddingLeft: "1em",
    width: '45vw',
    height: "5vh"
  },
  icon: {
    margin: 'auto',
    marginRight: '5px',
  },
  // offset: theme.mixins.toolbar
}));

export default useStyles;