import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";

function App() { 

  return (
    <body>
      <AnimatedCursor
        innerSize={20}
        outerSize={30}
        color='64,64,64'
        outerAlpha={0.5}
        innerScale={0.6}
        outerScale={1}

      />
      <div >
        <Header></Header>
        <section id='home'>
          <Home></Home>
        </section>
 
        <section id='about'>
          <About></About>
        </section>

        <section id='skills'>
          <Skills ></Skills>
        </section>

        <section id='experience'>
          <Experience ></Experience>
        </section>

        <section id='projects'>
          <Projects ></Projects>
        </section>

        <section id='contact'>
          <Contact ></Contact>
        </section>

        <section id='section'>
          <Footer ></Footer>
        </section>

      </div>

    </body>

  );
}

export default App;
