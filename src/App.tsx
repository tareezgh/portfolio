import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import TechSkills from "./pages/TechSkills";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCc33LFMXSxFaUdZiL_BjGjYc6Qd5jImPY",
  authDomain: "tareez-ghandour.firebaseapp.com",
  projectId: "tareez-ghandour",
  storageBucket: "tareez-ghandour.appspot.com",
  messagingSenderId: "292968644043",
  appId: "1:292968644043:web:cb04d1cbcf8dd5f948ca4e",
  measurementId: "G-TLP3000WW5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Intro />
      <TechSkills />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
