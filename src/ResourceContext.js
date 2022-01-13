import { createContext, useState } from "react";
import data from "./data";

const ResourceContext = createContext();
export const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useState(data);
  const addResource = (newResource) => {
    setResources([...resources, newResource]);
  };
  const deleteResource = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };
  return (
    <ResourceContext.Provider
      value={{ resources, addResource, deleteResource }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceContext;
