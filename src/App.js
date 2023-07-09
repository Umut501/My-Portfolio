import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <div> 
        <Header></Header>

        <section id='section1'>
          <Home></Home>
        </section>

        <section id='section2'>
          <About></About>
        </section>

        <section id='section3'>
          <Skills ></Skills>
        </section>

        <section id='section4'>
          <Experience ></Experience>
        </section>

        <section id='section5'>
          <Projects ></Projects>
        </section>

        <section id='section6'>
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
