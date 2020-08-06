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

const spaces = [
  {  
    url: "https://images.unsplash.com/photo-1563341591-ad0a750911cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {  
    url: "https://images.unsplash.com/photo-1551806235-fa3578e4ec2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {  
    url: "https://images.unsplash.com/photo-1566197147239-58a2590553b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {  
    url: "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  } 
];

export default function Spaces () {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList style={{width: "500vw"}} cellHeight={400}  spacing={1} className={classes.gridList}>

        {spaces.map((tile) => (
          <GridListTile key={tile.url} >
            <img src={tile.url} />
          </GridListTile>
        ))}
        
      </GridList>
    </div>
  );
}