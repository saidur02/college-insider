import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routers/Router.jsx';
import AuthProvider from './Pages/Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='container mx-auto '>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
   </div>
  </React.StrictMode>,
)
