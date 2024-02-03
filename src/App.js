import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="main">
        <Main />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
