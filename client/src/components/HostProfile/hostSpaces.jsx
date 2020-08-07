import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

export default function Spaces (props) {
  const { spaces } = props
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p style={{font:"initial", fontSize: "xx-large", margin: "10px"}}>Locations</p>
      <GridList style={{width: "500vw", height: "80vh"}} cellHeight={400}  spacing={1} className={classes.gridList}>
        {spaces.map((tile) => (
          <GridListTile key={tile.url} >
            <img src={tile.url} />
          </GridListTile>
        ))}
        
      </GridList>
    </div>
  );
}