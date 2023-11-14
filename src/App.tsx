import Navbar from "./components/Navbar";

import Hero from "./pages/Hero";
import TechSkills from "./components/TechSkills";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechSkills />
      <Portfolio />
      <ContactForm />
    </>
  );
}

export default App;
