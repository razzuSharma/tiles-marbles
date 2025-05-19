import About from "./components/About";
import Categories from "./components/Categories";
import Hero from "./components/Hero";

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
    </>
  );
}
