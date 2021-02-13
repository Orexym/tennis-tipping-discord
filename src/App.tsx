import React from 'react';
import './App.css';

export class App extends React.Component<any, any> {

  constructor() {
    super({});

    /*const [isLoggedIn, setIsLoggedIn] = useState(false);

    authRef.onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    console.log('logged in?', isLoggedIn);*/
  }

  public render() {
    return (
      <div className="App">
        Hello World!
      </div>
    );
  }

}