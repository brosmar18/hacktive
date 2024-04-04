import "./HeroCards.scss";
import { heroCardsData } from "../../constants";

const HeroCards = () => {
  return (
    <div className="heroCards">
      {heroCardsData.map((card, index) => (
        <div key={index} className="heroCards__card">
          <div className="heroCards__card-number">{card.number}</div>
          <h3 className="heroCards__card-title">{card.title}</h3>
          <p className="heroCards__card-text">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroCards;