import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./home/page"; 
import Project from "./project/page";
import About from "./about/page";
import Blog from "./blog/page";
import Playground from "./playground/page";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
