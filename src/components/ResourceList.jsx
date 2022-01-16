import { useContext } from "react";
import ResourceContext from "../ResourceContext";
import Card from "./Card";

const ResourceList = () => {
  const { resources } = useContext(ResourceContext);
  return (
    <div>
      {resources.map((info) => (
        <Card key={info.id} resource={info} />
      ))}
    </div>
  );
};

export default ResourceList;
