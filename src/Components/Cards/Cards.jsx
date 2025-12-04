import PrimeCard from "../PrimeCard/PrimeCard";
import "./Cards.css";

function Cards({ items = [] }) {
  return (
    <div className="cards-row horizontal-scroll-container">
      {items.map((item) => (
        <>
        <PrimeCard key={item.id} item={item} />
        </>
      ))}

    </div>
  );
}

export default Cards;
