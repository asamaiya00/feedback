import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Resources</h2>
        <div className="card">
          <h4>Name</h4>
          <div className="content">
            <p className="desc">
              DescriptionDescriptionDescriptionDescriptionDescriptionDescription
              DescriptionDescriptionDescriptionDescriptionDescriptionDescription
              DescriptionDescriptionDescriptionDescriptionDescriptionDescription
              Description
            </p>
            <button className="visit">Visit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
