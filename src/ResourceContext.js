import { createContext, useState } from "react";
import data from "./data";

const ResourceContext = createContext();
export const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useState(data);
  const addResource = (newResource) => {
    setResources([...resources, newResource]);
  };
  return (
    <ResourceContext.Provider value={{ resources, addResource }}>
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceContext;
