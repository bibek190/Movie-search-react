import SearchForm from "./components/SearchForm";
import "./App.css";

function App() {
  return (
    <div className="wrapper bg-dark text-info">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
            <h1>My Movie App</h1>
            <hr />
          </div>
        </div>
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
