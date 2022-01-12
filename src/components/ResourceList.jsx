import { useContext } from "react";
import ResourceContext from "../ResourceContext";
import Card from "./Card";

const ResourceList = () => {
  const { resources } = useContext(ResourceContext);
  return (
    <div>
      {resources.map((info) => (
        <Card
          name={info.name}
          description={info.description}
          type={info.type}
          url={info.url}
        />
      ))}
    </div>
  );
};

export default ResourceList;
