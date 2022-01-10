import "./App.css";
import Header from "./components/Header";
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";
import { ResourceProvider } from "./ResourceContext";
function App() {
  return (
    <ResourceProvider>
      <Header />
      <div className="container">
        <h2>Resources</h2>
        <ResourceForm />
        <ResourceList />
      </div>
    </ResourceProvider>
  );
}

export default App;
