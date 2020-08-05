import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  media: {
    height: "60vh",
    width:"45vw"
  },
  box: {
    height: "40vh",
    width: "45vw",
    overflow: "auto"
  },
  videobox: {
    height: "200px",
    overflow: "auto",
    display: "flex"
  },
  profileCard: {
    padding: "50px",
    height: "70vh"
  }
});

export default useStyles;