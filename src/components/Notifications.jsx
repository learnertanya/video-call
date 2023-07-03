import React, {useContext} from "react";
import { SocketContext } from '../Context';
import {Button} from '@mui/material';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
  
    return (
      <>
        {call.isReceivingCall && !callAccepted && (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>{call.names} is calling:</h1>
            <Button variant="contained" color="primary" onClick={answerCall}>
              Answer
            </Button>
          </div>
        )}
      </>
    );
  };
export default Notifications;