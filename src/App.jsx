import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Audience from "./Components/Audience";
import Benefits from "./Components/Benefits";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Audience />
      <Benefits />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
