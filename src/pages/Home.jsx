import ResourceForm from "../components/ResourceForm";
import ResourceList from "../components/ResourceList";
import { ResourceProvider } from "../ResourceContext";

const Home = () => {
  return (
    <ResourceProvider>
      <h2>Resources</h2>
      <ResourceForm />
      <ResourceList />
    </ResourceProvider>
  );
};

export default Home;
