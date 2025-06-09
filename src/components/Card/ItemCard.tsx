import image from "../../assets/table_placeholder.jpg";

const ItemCard = () => {
  return (
    <div className="card item-card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column px-4 py-3">
        <div className="d-flex justify-content-between">
          <h5 className="card-title item-name">Item Name</h5>
          <p className="card-text price">$99</p>
        </div>

        <p className="item-category my-1">Lounge</p>

        <button className="btn my-5 py-2">Purchase</button>
      </div>
    </div>
  );
};

export default ItemCard;
