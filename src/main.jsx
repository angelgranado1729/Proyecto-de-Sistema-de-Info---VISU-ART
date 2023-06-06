import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HOME_URL, ERROR_404, LOGIN_URL, REGISTER_URL } from './constants/urls';
import { LadingPage } from './pages/LandingPage/LandingPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<LadingPage />} />
        <Route path={ERROR_404} element={<NotFoundPage />} />
        <Route path={LOGIN_URL} element={<LoginPage />} />
        <Route path={REGISTER_URL} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
