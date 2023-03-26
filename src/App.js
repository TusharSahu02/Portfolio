import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import MyService from "./components/MyService";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <AboutMe />
      <MyService />
      <Qualifications />
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
