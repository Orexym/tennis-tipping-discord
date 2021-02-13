import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import logo from '@assets/images/logo.svg';
import { darkTheme, lightTheme } from '../assets/themes/theme';
import './App.css';
import FnToggle from './shared/FnToggle';
import { GlobalStyles } from './shared/GlobalStyles';

// export class App extends React.Component<any, any> {

const FnApp: React.FunctionComponent = () => {

  const [theme, setTheme] = useState<string>('dark');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }

    console.log(theme);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        {/*Pass the toggle functionality to the button*/}
        <FnToggle toggleTheme={toggleTheme} theme={theme}>Toggle theme</FnToggle>
        <h1>Test</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default FnApp;