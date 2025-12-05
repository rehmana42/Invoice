import React from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeInit} from '../.flowbite-react/init.js'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from 'flowbite-react'
import UserContextProvider from './Context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
<>
<BrowserRouter>
<UserContextProvider>
<ThemeProvider>
<App/>
<ToastContainer/>
</ThemeProvider>
</UserContextProvider>
</BrowserRouter>
</>
)
