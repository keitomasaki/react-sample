import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const getData = async () => {
    const data = await axios
      .get("http://localhost:8000/api/v1/task")
      .then((res) => {
        const fetchData = res.data;
        console.log(fetchData);
        return fetchData;
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit MASAKI</p>
        <button onClick={() => getData()}>button</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
