import { createContext, useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  where,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";
import { toast } from "react-toastify";
import data from "./data";
import { getAuth } from "firebase/auth";

const ResourceContext = createContext();
export const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "Video",
    url: "",
  });

  const fetchResources = async () => {
    try {
      const resourcesRef = collection(db, "resources");
      const q = query(
        resourcesRef,
        orderBy("timestamp", "desc"),
        where("userRef", "==", getAuth().currentUser?.uid)
        // limit(10)
      );
      const querySnap = await getDocs(q);
      const resources = [];
      querySnap.forEach((doc) => {
        return resources.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setResources(resources);
    } catch (error) {
      toast.error("Could not fetch Resources");
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const addResource = async (newResource) => {
    try {
      const docRef = await addDoc(collection(db, "resources"), {
        ...newResource,
        timestamp: serverTimestamp(),
        userRef: getAuth().currentUser?.uid,
      });
      setResources([{ id: docRef.id, ...newResource }, ...resources]);
      toast.success("Resource Added !");
    } catch (error) {
      toast.error("Can't add resource");
    }
  };
  const deleteResource = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDoc(doc(db, "resources", id));
      setResources(resources.filter((resource) => resource.id !== id));
      toast.success("Resource Deleted !");
    }
  };
  const updateResource = async (formData) => {
    const resourceId = formData.id;
    delete formData.id;
    await updateDoc(doc(db, "resources", resourceId), formData);
    fetchResources();
    toast.success("Resource Updated !");
    const updateResourceValue = {
      ...resources.find((resource) => resource.id === resourceId),
      ...formData,
    };
    setResources([
      ...resources.map((resource) =>
        resource.id === resourceId ? updateResourceValue : resource
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
