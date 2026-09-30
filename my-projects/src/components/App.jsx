import Header from "./Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.jsx";
import Projects from "./projects/Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import DetailProject from "./projects/DetailProject.jsx";
import ScrollToTop from "./ScrollToTop.jsx";


function App() {
  return (
  <BrowserRouter>
      <ScrollToTop/>
      <Header/>

      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/:slug" element={<DetailProject />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
