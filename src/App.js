import logo from "./assets/peter-aiello-logo.svg";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="app-description">
          <h1>React Accordion</h1>
          <p> Shift + Tab to go to select the previous section.</p>
        </div>

        <Accordion />
      </div>
    </div>
  );
}

export default App;
