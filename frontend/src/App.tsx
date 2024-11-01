import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import MyTestimonial from "./components/Testmoial";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Services />
      <Skills />
      <Projects />
      <MyTestimonial />
    </>
  );
}

export default App;
