import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NovySutaznyPodklad from "./NovySutaznyPodklad";
import RegisterDat from "./RegisterDat";
import Login from "./Login";
import Dashboard from "./Grafy.tsx";
import SutaznyPodklad from "./SutaznyPodklad.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novy-sutazny-podklad" element={<NovySutaznyPodklad />} />
        <Route path="/sutazny-podklad" element={<SutaznyPodklad />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<RegisterDat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
