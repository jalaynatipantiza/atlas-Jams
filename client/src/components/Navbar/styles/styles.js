import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  nav: {
    zIndex: "1",
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
    backgroundColor: "white"
  },
  toolbarColor: {
    display: "flex", 
    justifyContent: "space-between", 
    color: "black", 
    backgroundColor: "#c5bdae"
  },
  appBar: {
    position: "fixed",
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  appBar2: {
    position: "fixed",
    backgroundColor: "transparent"
  }
  // offset: theme.mixins.toolbar
}));

export default useStyles