import Header from "./Header.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Main from "./Main.jsx";
import Projects from "./projects/Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import DetailProject from "./projects/DetailProject.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Footer from "./Footer.jsx";
import { projectsList } from "./projects/projectsList.js";

const DocumentTitle = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const slug = pathname.startsWith("/projects/")
            ? decodeURIComponent(pathname.slice("/projects/".length))
            : null;
        const project = slug
            ? projectsList.find((item) => item.slug === slug)
            : null;

        document.title = project
            ? `${project.title} — Ivan's Portfolio`
            : "Ivan's Portfolio";
    }, [pathname]);

    return null;
};

function App() {
  return (
  <BrowserRouter>
      <div className="flex min-h-screen flex-col">
          <DocumentTitle/>
          <ScrollToTop/>
          <Header/>

          <div className="flex-1">
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/projects/:slug" element={<DetailProject />} />
              </Routes>
          </div>
          <Footer />
      </div>
  </BrowserRouter>
  )
}

export default App
