import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <Home />
        <About />
        <Projects />
        <Reviews />
        <Contact />
        {/* {children} */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
