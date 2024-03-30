import { Navbar } from "../../components";
import "./Hero.scss";

const Hero = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="hero"></div>
    </header>
  );
};

export default Hero;
