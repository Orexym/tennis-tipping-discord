import React, { Dispatch } from 'react';
import { ThemeProvider } from 'styled-components';
// import logo from '@assets/images/logo.svg';
import { darkTheme, lightTheme } from '../assets/themes/theme';
import './App.css';
import { GlobalStyles } from './shared/GlobalStyles';
import { Toggle } from './shared/Toggle';

export class App extends React.Component<any, any> {
  private theme: string;
  private setTheme: Dispatch<string>;

  constructor() {
    super({});

    // [this.theme, this.setTheme] = useState<string>('dark');
  }

  public render() {
    return (
      // <div className={`App`}>
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo"/>
      //     <p>
      //       Edit <code>src/core/App.tsx</code> and save to reload.
      //     </p>
      //     <a className="App-link"
      //        href="https://reactjs.org"
      //        target="_blank"
      //        rel="noopener noreferrer">
      //       Learn React
      //     </a>
      //     <Toggle/>
      //   </header>
      // </div>
      <ThemeProvider theme={this.theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles/>
          {/*Pass the toggle functionality to the button*/}
          <Toggle toggleTheme={this.toggleTheme} theme={this.theme}>Toggle theme</Toggle>
          <h1>Test</h1>
          <footer>
          </footer>
        </>
      </ThemeProvider>
    );
  }

  // The function that toggles between themes
  private toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (this.theme === 'light') {
      this.setTheme('dark');
      // otherwise, it should be light
    } else {
      this.setTheme('light');
    }

    console.log(this.theme);
  }

}