import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import ResourceForm from "./components/ResourceForm";
import data from "./data";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Resources</h2>
        <ResourceForm />
        {data.map((info) => (
          <Card
            name={info.name}
            description={info.description}
            type={info.type}
          />
        ))}
      </div>
    </>
  );
}

export default App;
