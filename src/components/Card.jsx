import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ResourceContext from "../ResourceContext";
import { useContext } from "react";
const Card = ({ resource }) => {
  const { id, name, type, description, url } = resource;
  const { deleteResource } = useContext(ResourceContext);
  const handleDelete = () => {
    deleteResource(id);
  };
  return (
    <div className="card">
      <FontAwesomeIcon
        className="delete"
        icon={faTrash}
        onClick={handleDelete}
      />
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
