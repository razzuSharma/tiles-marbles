import About from "./components/About";
import Categories from "./components/Categories";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="categories" className="scroll-mt-20">
        <Categories />
      </section>
    </>
  );
}
