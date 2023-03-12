import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/CommonCss/commonStyle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataContextProvider } from './contexts/DataContext';
import { initializeIcons } from '@fluentui/react/lib/Icons';
const con = document.getElementById('root');
initializeIcons(/* optional base url */);
if (con) {
  const root = ReactDOM.createRoot(con);
  root.render(
    <React.StrictMode>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
