import ItemCard from "./ItemCard";

const CardContainer = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {Array.from({ length: 10 }).map((_) => (
          <div className="col">
            <ItemCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
