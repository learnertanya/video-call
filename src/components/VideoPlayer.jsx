import React ,{useContext} from "react";
import { SocketContext } from '../Context';
import {Grid, Typography, Paper} from '@mui/material';
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      
    },
    gridContainer: {
      justifyContent: 'center',
      
    },
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
  }));
  const VideoPlayer = () => {
    const { names, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();
  
    return (
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{names || 'Name'}</Typography>
              <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{call.names || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
      </Grid>
    );
  };
  export default VideoPlayer;
