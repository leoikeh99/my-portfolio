import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <main>
      <Header />
      <div className="pt-[5.435rem]">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
