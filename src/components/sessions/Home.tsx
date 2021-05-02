import React, { useEffect, useState } from 'react';
import api from '../../api';
import { saveLastNotificationCheck } from '../../services/service';


export const Home = (props: any) => {

  const [socket, setSocket] = useState<WebSocket | null>();

  /*useEffect(() => {
    // Anything in here is fired on component mount.
    // register to notifications with backend
    setSocket(new WebSocket(api.backend.wss));
    if (socket) {
      console.log(socket);
      // Connection opened
      socket.onopen = function (event) {
        socket.send('Hello Server!');
      };

      // Listen for messages
      socket.onmessage = function (event) {
        console.log('Message from server ', event.data);
      };
    }
    // registerNotifications(socket).then(value => console.log(value));
    return () => {
      // Anything in here is fired on component unmount.
      // register current timestamp in cookies
      saveLastNotificationCheck();
    }
  }, []);*/

  return (
    <div className={'home-root'}>
      You are logged in.
    </div>
  );
}