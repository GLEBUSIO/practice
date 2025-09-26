import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux'; 
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { store } from '@store/store.js';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);