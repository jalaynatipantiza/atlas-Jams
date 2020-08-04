import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    padding: 20,
    margin: 20,
    height: 300
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
    width: 126,
    height: 126,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 900,
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

}));

export default useStyles;