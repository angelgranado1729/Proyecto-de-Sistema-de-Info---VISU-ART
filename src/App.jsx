import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { LoginPage } from "./pages/LoginPages/LoginPage/LoginPage";
import { ForgotPasswordPage } from "./pages/LoginPages/ForgotPasswordPage/ForgotPasswordPage";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { RegisterPage } from "./pages/RegisterPages/RegisterPage/RegisterPage";
import { RegisterFormPage } from "./pages/RegisterPages/RegisterFormPage/RegisterFormPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { ResetPasswordPage } from "./pages/LoginPages/ResetPasswordPage/ResetPasswordPage";
import { TourPage } from "./pages/TourPage/TourPage";
import UserProfilePage from "./pages/UserPages/UserProfile/UserProfilePage";
import LookReserve from "./pages/LookReserve/LookReserve";

import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminPage from "./pages/AdminPages/AdminPage/AdminPage";
import ReserveAdminPage from "./pages/AdminPages/ReserveAdminPage/ReserveAdminPage";
import VisionPage from "./pages/VisionPage/VisionPage";
import MisionPage from "./pages/MisionPage/MisionPage";
import ObjectivesPage from "./pages/ObjectivesPage/ObjectivesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import EditProfilePage from "./pages/UserPages/EditProfilePage/EditProfilePage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import ReservePage from "./pages/ReservePage/ReservePage";
import ArtAdmin from "./pages/AdminPages/ArtAdmin/ArtAdmin";
import ArtEdit from "./pages/AdminPages/ArtEdit/ArtEdit";
import CreateArt from "./pages/AdminPages/CreateArtAdmin/CreateArt";
import TourAdmin from "./pages/AdminPages/AdminTours/AdminTours";
import TourEdit from "./pages/AdminPages/EditTour/EditTour";
import CreateTour from "./pages/AdminPages/CreateTour/CreateTour";
import TourEditObras from "./pages/AdminPages/EditTour/EditTourArt";
import TourEditFechas from "./pages/AdminPages/EditTour/EditCalendar";
import AdminPageContact from "./pages/AdminPages/AdminPage/AdminContact";
import Feedback from "react-bootstrap/esm/Feedback";
import PayPage from "./pages/PayPage/PayPage";

import {
  ADMIN_CREATE_OBRAS_URL,
  ADMIN_EDIT_OBRAS_URL,
  ADMIN_OBRAS_URL,
  ADMIN_RESERVE_URL,
  ADMIN_TOURS_URL,
  ADMIN_TOURS_EDIT_URL,
  ADMIN_TOURS_EDIT_ART,
  ADMIN_TOUR_CREATE_URL,
  ADMIN_URL,
  CALENDAR_URL,
  CONTACT_URL,
  ERROR_404,
  FEEDBACK_URL,
  HOME_URL,
  LOGIN_URL,
  MISION_URL,
  OBJECTIVES_URL,
  REGISTER_FORM_URL,
  REGISTER_URL,
  RESERVE_URL,
  USER_PROFILE_EDIT_URL,
  USER_PROFILE_URL,
  VISION_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
  ADMIN_TOURS_CALENDAR_URL,
  ADMIN_URL_CONTACT,
  RESERVE_LOOK_URL,
  TOUR_DETAILS_URL
} from "./constants/urls";
import "./App.css";
import { TourContextProvider } from "./contexts/TourContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <TourContextProvider>
          <Routes>
            <Route
              path={HOME_URL}
              element={<LandingPage />}
            />

            <Route
              path={ERROR_404}
              element={
                <NotFoundPage />
              }
            />

            <Route
              path={VISION_URL}
              element={
                <VisionPage />
              }
            />

            <Route
              path={MISION_URL}
              element={
                <MisionPage />
              }
            />

            <Route
              path={OBJECTIVES_URL}
              element={
                <ObjectivesPage />
              }
            />

            <Route
              path={CONTACT_URL}
              element={
                <ContactPage />
              }
            />


            <Route
              path={TOUR_DETAILS_URL}
              element={
                <TourPage />
              }
            />

            <Route
              path={CALENDAR_URL}
              element={
                <CalendarPage />
              }
            />


            <Route
              path={RESERVE_LOOK_URL}
              element={
                <PrivateRoute>
                  <LookReserve />
                </PrivateRoute>
              }
            />

            <Route
              path={RESERVE_URL}
              element={
                <PrivateRoute>
                  <ReservePage />
                </PrivateRoute>
              }
            />

            <Route
              path={RESERVE_URL}
              element={
                <PrivateRoute>
                  <ReservePage />
                </PrivateRoute>
              }
            />

            <Route
              path={FEEDBACK_URL}
              element={
                <PrivateRoute>
                  <FeedbackPage />
                </PrivateRoute>
              }
            />

            <Route
              path={REGISTER_URL}
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path={REGISTER_FORM_URL}
              element={
                <PublicRoute>
                  <RegisterFormPage />
                </PublicRoute>
              }
            />

            <Route
              path={ERROR_404}
              element={
                <NotFoundPage />
              }
            />

            {/* Admin Pages */}
            <Route
              path={ADMIN_URL}
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_URL_CONTACT}
              element={
                <PrivateRoute>
                  <AdminPageContact />
                </PrivateRoute>
              }
            />


            {/* Login and register */}
            <Route
              path={LOGIN_URL}
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              path={FORGOT_PASSWORD_URL}
              element={
                <ForgotPasswordPage />
              }
            />

            <Route
              path={RESET_PASSWORD_URL}
              element={
                <ResetPasswordPage />
              }
            />

            <Route
              path={REGISTER_URL}
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path={REGISTER_FORM_URL}
              element={
                <PublicRoute>
                  <RegisterFormPage />
                </PublicRoute>
              }
            />



            <Route
              path={ADMIN_RESERVE_URL}
              element={
                <PrivateRoute>
                  <ReserveAdminPage />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_RESERVE_URL}
              element={
                <PrivateRoute>
                  <ReserveAdminPage />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_EDIT_OBRAS_URL}
              element={
                <PrivateRoute>
                  <ArtEdit />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_TOURS_CALENDAR_URL}
              element={
                <PrivateRoute>
                  <TourEditFechas />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_CREATE_OBRAS_URL}
              element={
                <PrivateRoute>
                  <CreateArt />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_OBRAS_URL}
              element={
                <PrivateRoute>
                  <ArtAdmin />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_TOURS_EDIT_URL}
              element={
                <PrivateRoute>
                  <TourEdit />
                </PrivateRoute>
              }
            />


            <Route
              path={ADMIN_TOURS_URL}
              element={
                <PrivateRoute>
                  <TourAdmin />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_TOUR_CREATE_URL}
              element={
                <PrivateRoute>
                  <CreateTour />
                </PrivateRoute>
              }
            />

            <Route
              path={ADMIN_TOURS_EDIT_ART}
              element={
                <PrivateRoute>
                  <TourEditObras />
                </PrivateRoute>

              }
            />

            {/* User Pages */}
            <Route
              path={USER_PROFILE_URL}
              element={
                <PrivateRoute>

                  <UserProfilePage />
                </PrivateRoute>

              }
            />

            <Route
              path={USER_PROFILE_EDIT_URL}
              element={
                <PrivateRoute>

                  <EditProfilePage />
                </PrivateRoute>

              }
            />

            <Route
              path={USER_PROFILE_EDIT_URL}
              element={
                <PrivateRoute>
                  <EditProfilePage />
                </PrivateRoute>
              }
            />

          </Routes >
        </TourContextProvider>
      </UserContextProvider >
      <Footer />
    </>
  )
}

export default App