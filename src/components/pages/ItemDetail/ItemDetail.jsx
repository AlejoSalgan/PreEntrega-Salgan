import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="items">
      <img src={item.img}></img>
      <div className="details">
        <h1 style={{ marginBottom: "40px" }}>{item.title}</h1>
        <h2 style={{ marginBottom: "40px" }}>${item.price}</h2>
        <h5>{item.detail}</h5>
      </div>
    </div>
  );
};
export default ItemDetail;
