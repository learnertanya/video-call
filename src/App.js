import React from "react";
import { AppBar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div className= {classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          VideoCall
        </Typography>
      </AppBar>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
      
    </div>
  );
};
export default App;
