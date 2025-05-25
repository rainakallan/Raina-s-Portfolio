import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
