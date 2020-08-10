import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    fontFamily: "initial",
    padding: 20,
    margin: 40,
    height: 300,
  }
  ,
  header: {
    fontFamily: "initial",
    alignItems: 'center',
    padding: 20,
    marginTop: 90,
    marginBottom: 40,
    height: 100,
    display: 'flex',
  },
  root: {
    fontFamily: "initial",

    flexGrow: 1,
  },
  image: {
    fontFamily: "initial",

    // width: 126,
    height: 126,
    marginBottom: 20,
  },
  img: {
    fontFamily: "initial",

    margin: 'auto',
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 7,
  },
  paper: {
    '&:hover': {
      background: '#E5EEFC',
   },
    // backgroundColor: 'rgb(249,241,241)',
    fontFamily: "initial",
    padding: theme.spacing(2),
    marginTop: 'auto',
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 900,
  },
  card: {
    width: '70%',
    position: 'absolute',
    // filter: 'blur(2px)',
    opacity: 0.96,
  },
  mainContainer: {
    // width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundAttachment: 'fixed',
    // position: 'fixed',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  headerRight: {
    fontFamily: "initial",

    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 40,
  },
  headerLeft: {
    fontFamily: "initial",

    display: 'flex',
    paddingLeft: 40,
  },
  name: {
    fontFamily: "initial",
    fontSize: '25px',
    paddingLeft: 20,
    paddingBottom: 15,
  },
  title: {
    fontFamily: "initial",
    margin: 20,
    // marginTop: 40,

    // paddingTop: 20,
    justify: 'center',
  },
  banner: {
    fontFamily: "initial",

    // opacity: 0.4,
    // backgroundImage: "url('https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
    backgroundPosition: 'center',
    // filter: 'blur(2px)',
    minHeight: "350px",
    backgroundSize: 'cover',
  },
  description: {
    fontSize: '16px',
    // width: '75%',
  },  
  eventDescription: {
    fontSize: '16px',
    width: '75%',
    textAlign: 'center',
    marginBottom: 30,
  }
}));

export default useStyles;