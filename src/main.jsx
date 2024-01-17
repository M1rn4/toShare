import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="ethereum" clientId="1d579d0f056b2b6f1fbea5560ca6347c">
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
)
