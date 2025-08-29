import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Search from "./pages/Search";
import About from "./pages/About";
import Knowledge from "./pages/Knowledge";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
