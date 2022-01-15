import { createContext, useState } from "react";
import data from "./data";

const ResourceContext = createContext();
export const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "Video",
    url: "",
  });
  const addResource = (newResource) => {
    setResources([...resources, newResource]);
  };
  const deleteResource = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };
  const updateResource = (formData) => {
    const updateResourceValue = {
      ...resources.find((resource) => resource.id === formData.id),
      ...formData,
    };
    setResources([
      ...resources.map((resource) =>
        resource.id === formData.id ? updateResourceValue : resource
      ),
    ]);
  };
  const populateFormData = (formData) => {
    setFormData(formData);
  };
  return (
    <ResourceContext.Provider
      value={{
        resources,
        formData,
        addResource,
        deleteResource,
        updateResource,
        populateFormData,
        setFormData,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceContext;
