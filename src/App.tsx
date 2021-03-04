import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Menubar } from './components/Menubar';
import { Home } from './components/sessions/Home';
import { Login } from './components/sessions/Login';
import { Events } from './components/tennis/Events';
import { authRef } from './firebase';

export const App = (props: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  authRef.onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    authRef.signOut()
      .catch((error) => {
        setIsLoggedIn(false);
        console.log('Forced log off');
      });
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <>
          <Login/>
        </>
      ) : (
        <>
          <Menubar/>
          <Router> {/*router-outlet*/}
              <Route path={'/'} component={Home}/>
              <Route path={'/events'} component={Events}/>
          </Router>
          <div><Link className={'footer'} onClick={signOut}>Sign out</Link></div>
        </>
      )}
    </div>
  );

};
