import "./card.css";

const Card = (props) => {
  const { image, title, description, price } = props;
  return (
    <article className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-footer">
        <p className="price">{price}</p>
        <button>View</button>
      </div>
    </article>
  );
};

export default Card;
