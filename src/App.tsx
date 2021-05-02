import { Link as MatLink } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Menubar } from './components/Menubar';
import { Home } from './components/sessions/Home';
import { Login } from './components/sessions/Login';
import { Events } from './components/tennis/Events';
import { authRef } from './firebase';

export const App = (props: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    // history.push('/');
    authRef.onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    return signOut;
  }, []);

  const signOut = () => {
    authRef.signOut()
      .catch((error) => {
        setIsLoggedIn(false);
        console.log('Forced log off');
      });
  };

  return (
    <BrowserRouter>
      <div className={'app-root'}>
        {!isLoggedIn ? (
          <>
            <Login/>
          </>
        ) : (
          <>
            <Menubar/>
            <div>
              <Switch>
                <Route path={'/events'} component={Events}/>
                <Route path={'/'} exact={true} component={Home}/>
              </Switch>
            </div>

            <div>
              <MatLink className={'footer'} onClick={signOut}>Sign out</MatLink>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );

};
