import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    width: '40%',
    margin: '100px auto 0 auto',
    marginTop:"0",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    width: '100%',
    margin: 10,
  },
  nonField: {
    width: '100%',
    margin: 20,
    display:"flex",
    justifyContent:"space-between"
  },
}));

export default useStyles;