import {
  About,
  ChooseUs,
  Contact,
  Discount,
  Footer,
  Hero,
  Prices,
  Services,
} from "./sections";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <main>
        <About />
        <Services />
        <ChooseUs />
        <Discount />
        <Prices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
