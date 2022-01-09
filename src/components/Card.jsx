const Card = ({ name, description, type }) => {
  return (
    <div className="card">
      <div className="badge">{type}</div>
      <h4>{name}</h4>
      <div className="content">
        <p className="desc">{description}</p>
        <button className="visit">Visit</button>
      </div>
    </div>
  );
};

export default Card;
