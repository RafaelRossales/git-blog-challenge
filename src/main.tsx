import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Post from './components/post/index.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
  </React.StrictMode>,
)

