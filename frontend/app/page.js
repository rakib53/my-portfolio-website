import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import MyTestimonial from "./components/Testmoial";
import ContactForm from "./components/ContactForm";
import Copyright from "./components/Copyright";
export default function Home() {
  return (
    <div>
      <header className="bg">
        <Navbar />
        <Banner />
      </header>
      <Services />
      <Skills />
      <Projects />
      <MyTestimonial />
      <ContactForm />
      <Copyright />
    </div>
  );
}
