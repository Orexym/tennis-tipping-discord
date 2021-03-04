import React, { useEffect } from 'react';
import { registerNotifications, saveLastNotificationCheck } from './service';


export const Home = (props: any) => {

  useEffect(() => {
    // Anything in here is fired on component mount.
    // register to notifications with backend
    registerNotifications();
    return () => {
      // Anything in here is fired on component unmount.
      // register current timestamp in cookies
      saveLastNotificationCheck();
    }
  }, [])

  return (
    <div>
      You are logged in.
    </div>
  );
}