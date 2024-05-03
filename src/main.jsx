// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import GlobalStyle from './stylesheet/globalStyle.js';
// import { Provider } from 'react-redux';
// import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './stylesheet/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/BookSpace">
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
  // {/*<React.StrictMode> */}
  //   {/* <Provider store={store}> */}
  //   {/* </Provider> */}
  // {/* </React.StrictMode> */}
);
