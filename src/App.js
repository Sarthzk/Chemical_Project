import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Survey from "./pages/Survey";
import Search from "./pages/Search";
import About from "./pages/About";
import Knowledge from "./pages/Knowledge";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Quiz from "./pages/Quiz";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;