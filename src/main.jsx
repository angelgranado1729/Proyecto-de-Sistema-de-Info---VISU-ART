import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from "react-router-dom"
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage/LandingPage'
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./index.css"
import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
