import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Copyright from "./components/Copyright";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import MyTestimonial from "./components/Testimonial";
import WorkExperience from "./components/WorkExperience";

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
      <WorkExperience />
      <MyTestimonial />
      <ContactForm />
      <Copyright />
    </>
  );
}

export default App;
