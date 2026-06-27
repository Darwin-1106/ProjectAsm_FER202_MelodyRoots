import { Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Instruments from "./pages/Instruments.jsx";
import InstrumentDetail from "./pages/InstrumentDetail.jsx";
import Courses from "./pages/Courses.jsx";
import Events from "./pages/Events.jsx";
import Community from "./pages/Community.jsx";

function App() {
  return (
    <div>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/instruments/:id" element={<InstrumentDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </div>
  );
}

export default App;