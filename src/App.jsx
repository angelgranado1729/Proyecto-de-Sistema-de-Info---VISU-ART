import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminPage from "./pages/AdminPages/AdminPage/AdminPage";
import ReserveAdminPage from "./pages/AdminPages/ReserveAdminPage/ReserveAdminPage";
// import ArtAdmin from "./pages/AdminPages/ArtAdmin/ArtAdmin";
// import ArtEdit from "./pages/AdminPages/ArtEdit/ArtEdit";
// import CreateArt from "./pages/AdminPages/CreateArtAdmin/CreateArt";
// import AdminTours from "./pages/AdminPages/AdminTours/AdminTours";
import VisionPage from "./pages/VisionPage/VisionPage";
import MisionPage from "./pages/MisionPage/MisionPage";
import ObjectivesPage from "./pages/ObjectivesPage/ObjectivesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import ReservePage from "./pages/ReservePage/ReservePage";
import EditProfilePage from "./pages/UserPages/EditProfilePage/EditProfilePage";
import { UserContextProvider } from "./contexts/UserContext";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { RegisterPage } from "./pages/RegisterPages/RegisterPage/RegisterPage";
import { RegisterFormPage } from "./pages/RegisterPages/RegisterFormPage/RegisterFormPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { UserProfilePage } from "./pages/UserPages/UserProfile/UserProfilePage";
import {
  ADMIN_CREATE_OBRAS_URL,
  ADMIN_EDIT_OBRAS_URL,
  ADMIN_OBRAS_URL,
  ADMIN_RESERVE_URL,
  ADMIN_TOURS_URL,
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
  VISION_URL
} from "./constants/urls";
import "./App.css";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route
            path={HOME_URL}
            element={<LandingPage />}
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
            path={CALENDAR_URL}
            element={
              <CalendarPage />
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
            path={RESERVE_URL}
            element={
              <PrivateRoute>
                <ReservePage />
              </PrivateRoute>
            }
          />

          <Route
            path={LOGIN_URL}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
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
            path={ADMIN_RESERVE_URL}
            element={
              <PrivateRoute>
                <ReserveAdminPage />
              </PrivateRoute>
            }
          />

          {/* 
          <Route
            path={ADMIN_OBRAS_URL}
            element={
              <PrivateRoute>
                <ArtAdmin />
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
            path={ADMIN_CREATE_OBRAS_URL}
            element={
              <PrivateRoute>
                <CreateArt />
              </PrivateRoute>
            }
          />

          <Route
            path={ADMIN_TOURS_URL}
            element={
              <PrivateRoute>
                <AdminTours />
              </PrivateRoute>
            }
          /> */}

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

        </Routes >
      </UserContextProvider>
      <Footer />
    </>
  )
}

export default App