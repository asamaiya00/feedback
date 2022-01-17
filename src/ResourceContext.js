import { createContext, useState, useEffect, useRef } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase.config";
import { toast } from "react-toastify";
import data from "./data";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ResourceContext = createContext();
export const ResourceProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "Video",
    url: "",
  });

  const isMounted = useRef(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const resourcesRef = collection(db, "resources");
        const q = query(resourcesRef, orderBy("timestamp", "desc"), limit(10));
        const querySnap = await getDocs(q);
        const resources = [];
        querySnap.forEach((doc) => {
          return resources.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setResources(resources);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch Resources");
      }
    };

    fetchResources();

    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData((prev) => {
            return {
              ...prev,
              userRef: user.uid,
            };
          });
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const addResource = async (newResource) => {
    try {
      await addDoc(collection(db, "resources"), {
        ...newResource,
        timestamp: serverTimestamp(),
      });
      setResources([newResource, ...resources]);
      toast.success("Resource Added !");
    } catch (error) {
      toast.error("Can't add resource");
    }
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
