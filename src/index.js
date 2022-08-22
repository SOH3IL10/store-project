import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from './Context/Context';
import { NhostClient, NhostReactProvider } from '@nhost/react'

const nhost = new NhostClient({
    subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
    region: process.env.REACT_APP_NHOST_REGION
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider>
        <NhostReactProvider nhost={nhost}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </NhostReactProvider>
    </StateProvider>
);
