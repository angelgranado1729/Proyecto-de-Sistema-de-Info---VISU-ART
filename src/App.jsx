import {Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from "./components/NavBar/Navbar"
import Footer from "./components/Footer/Footer"
import LandingPage from "./pages/LandingPage/LandingPage"
import MisionPage from "./pages/MisionPage/MisionPage"
import VisionPage from "./pages/VisionPage/VisionPage"
import ObjectivesPage from "./pages/ObjectivesPage/ObjectivesPage"
import AdminPage from "./pages/AdminPage/AdminPage"
import CalendarPage from "./pages/CalendarPage/CalendarPage"

import ReserveAdminPage from "./pages/ReserveAdminPage/ReserveAdminPage"

import EditProfilePage from "./pages/EditProfilePage/EditProfilePage"
import ArtAdmin from "./pages/ArtAdmin/ArtAdmin"
import ArtEdit from "./pages/ArtEdit/ArtEdit"
import CreateArt from "./pages/CreateArtAdmin/CreateArt"




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/mision" element={<MisionPage/>}/>
        <Route path="/vision" element={<VisionPage/>}/>
        <Route path="/objetivos" element={<ObjectivesPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>

        <Route path="/adminreserve" element={<ReserveAdminPage/>}/>
        <Route path="/adminobras" element={<ArtAdmin/>}/>
        <Route path="/editar-obra/:nombre" element={<ArtEdit/>}/>
        <Route path="/createart" element={<CreateArt/>}/>

        <Route path="/editprofile" element={<EditProfilePage/>}/>
        

      </Routes>
      <Footer/>
    </>
  )
}

export default App