import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { store } from './store/store.ts';
import { Provider } from 'react-redux'; 
import { GlobalStyle } from './styles/GlobalStyle.ts';
import { theme } from './styles/theme';

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