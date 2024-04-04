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
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="hero__gradient-bg">
        <Navbar />
        <Hero />
      </div>
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
