import About from "./components/About";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="categories">
        <Categories />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
