import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { ADMIN_URL, CALENDAR_URL, ERROR_404, HOME_URL, LOGIN_URL, MISION_URL, OBJECTIVES_URL, REGISTER_FORM_URL, REGISTER_URL, VISION_URL } from './constants/urls'
import AdminPage from './pages/AdminPage/AdminPage'
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PublicRoute } from './components/PublicRoute/PublicRoute'
import { UserContextProvider } from './contexts/UserContext'
import MisionPage from './pages/MisionPage/MisionPage'
import VisionPage from './pages/VisionPage/VisionPage'
import ObjectivesPage from './pages/ObjectivesPage/ObjectivesPage'
import CalendarPage from './pages/CalendarPage/CalendarPage'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { RegisterFormPage } from './pages/RegisterFormPage/RegisterFormPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>

          <Route path={HOME_URL}
            element={
              <LandingPage />
            }
          />

          <Route path={MISION_URL}
            element={
              <MisionPage />
            }
          />

          <Route path={VISION_URL}
            element={
              <VisionPage />
            }
          />

          <Route path={OBJECTIVES_URL}
            element={
              <ObjectivesPage />
            }
          />

          {/* CREO QUE EL CALENDARIO ES UNA VISTA PRIVADA,
           DESPUES LO VERIFICO JEJEJEJEJEJE */}
          <Route path={CALENDAR_URL}
            element={
              <PrivateRoute>
                <CalendarPage />
              </PrivateRoute>
            }
          />


          <Route path={REGISTER_URL}
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route path={REGISTER_FORM_URL}
            element={
              <PublicRoute>
                <RegisterFormPage />
              </PublicRoute>
            }
          />

          <Route path={LOGIN_URL}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>

            }
          />

          <Route
            path={ADMIN_URL}
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />

          <Route path={ERROR_404}
            element={
              <NotFoundPage />
            }
          />

        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode >
)
