import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import Play from "./pages/Play"



function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/play" element={<Play/>}/>
  </Routes>
  </BrowserRouter>

    </div>
  )
}

export default App
