import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // this code below replaces lines 10-12 when using Aut0
    <Auth0Provider
    domain="dev-a7xzy1ja.us.auth0.com"
    clientId="1gwPF2ejgCe8Ha2iQOfYmDZv9YxWegiT"
    redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
