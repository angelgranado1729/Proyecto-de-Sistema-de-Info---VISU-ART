import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import {
  ADMIN_CREATE_OBRAS_URL,
  ADMIN_EDIT_OBRAS_URL,
  ADMIN_OBRAS_URL,
  ADMIN_RESERVE_URL,
  ADMIN_TOURS_URL,
  ADMIN_URL, CALENDAR_URL,
  ERROR_404,
  FEEDBACK_URL,
  HOME_URL,
  LOGIN_URL,
  MISION_URL,
  OBJECTIVES_URL,
  REGISTER_FORM_URL,
  REGISTER_URL,
  USER_PROFILE_URL,
  VISION_URL
} from './constants/urls'
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
import { AdminRoute } from './components/AdminRoute/AdminRoute'
import ReserveAdminPage from './pages/ReserveAdminPage/ReserveAdminPage'
import ArtAdmin from './pages/ArtAdmin/ArtAdmin'
import ArtEdit from './pages/ArtEdit/ArtEdit'
import CreateArt from './pages/CreateArtAdmin/CreateArt'
import EditProfilePage from './pages/EditProfilePage/EditProfilePage'
import { TourPage } from './pages/TourPage/TourPage'
import FeedbackPage from './pages/FeedbackPage/FeedbackPage'

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

          <Route path={CALENDAR_URL}
            element={
              <CalendarPage />
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

          <Route path={USER_PROFILE_URL}
            element={
              <PrivateRoute>
                <EditProfilePage />
              </PrivateRoute>
            }
          />

          <Route
            path={ADMIN_URL}
            element={
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            }
          />

          <Route
            path={ADMIN_RESERVE_URL}
            element={
              <AdminRoute>
                <ReserveAdminPage />
              </AdminRoute>
            }
          />

          <Route
            path={ADMIN_OBRAS_URL}
            element={
              <AdminRoute>
                <ArtAdmin />
              </AdminRoute>
            }
          />

          <Route
            path={ADMIN_EDIT_OBRAS_URL}
            element={
              <AdminRoute>
                <ArtEdit />
              </AdminRoute>
            }
          />

          <Route
            path={ADMIN_TOURS_URL}
            element={
              <AdminRoute>
                <TourPage />
              </AdminRoute>
            }
          />

          <Route
            path={ADMIN_CREATE_OBRAS_URL}
            element={
              <AdminRoute>
                <ArtEdit />
              </AdminRoute>
            }
          />

          <Route path={ERROR_404}
            element={
              <NotFoundPage />
            }
          />

          <Route
            path={FEEDBACK_URL}
            element={
              <AdminRoute>
                <FeedbackPage />
              </AdminRoute>
            }
          />


        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode >
)