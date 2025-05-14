import logo from "./logo.svg";
import "./App.css";

import NewsList from "./Components/NewsList";
function App() {
  return (
    <div className="App">
      <h1>News Dashboard</h1>
      <NewsList />
    </div>
  );
}

export default App;
