const Card = ({ name, description, type, url }) => {
  return (
    <div className="card">
      <div className="badge">{type}</div>
      <h4>{name}</h4>
      <div className="content">
        <p className="desc">{description}</p>
        <a href={url} className="visit">
          Visit
        </a>
      </div>
    </div>
  );
};

export default Card;
