import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import About from "./components/About";
import Careers from "./components/Careers";
import Jobs from "./components/Jobs";
import Services from "./components/Services";

import Footer from "./components/Footer";
import { Swiper } from "swiper/react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Careers />
      <Jobs />
      <Services />
      <Footer />
      <Swiper />
    </>
  );
}

export default App;
