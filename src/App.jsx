import {Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from "./components/NavBar/Navbar"
import Footer from "./components/Footer/Footer"
import LandingPage from "./pages/LandingPage/LandingPage"



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App