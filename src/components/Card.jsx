import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import ResourceContext from "../ResourceContext";
import { useContext } from "react";

const Card = ({ resource }) => {
  const { id, name, type, description, url } = resource;
  const { deleteResource, populateFormData } = useContext(ResourceContext);
  const handleDelete = () => {
    deleteResource(id);
  };
  const handleEdit = () => {
    populateFormData(resource);
    //deleteResource(id);
  };

  return (
    <div className="card">
      <FontAwesomeIcon className="edit" icon={faEdit} onClick={handleEdit} />
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
