import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    padding: 20,
    margin: 40,
    height: 300,
  }
  ,
  header: {
    padding: 20,
    marginTop: 90,
    height: 100,
    display: 'flex',
  },
  root: {
    flexGrow: 1,
  },
  image: {
    // width: 126,
    height: 126,
    marginBottom: 20,
  },
  img: {
    margin: 'auto',
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 7,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 900,
  },
  headerRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 40,
  },
  headerLeft: {
    display: 'flex',
    paddingLeft: 40,
  },
  name: {
    paddingLeft: 20,
    paddingBottom: 15,
  },
  title: {
    margin: 20,
    // paddingTop: 20,
    justify: 'center',
  },
  banner: {
    // opacity: 0.4,
    // backgroundImage: "url('https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
    backgroundPosition: 'center',
    filter: 'blur(2px)',
    minHeight: "350px",
    backgroundSize: 'cover',
  }
}));

export default useStyles;