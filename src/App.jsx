import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <div style={{backgroundColor:'#1a1c20',color:'#fff'}}>
        <Header />
        <Intro />
        <About />
        <Skills/>
        <Projects />
        <Footer/>
      </div>
    </>
  );
}

export default App;
