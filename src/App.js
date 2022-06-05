import "./App.css";
import LeftBlock from "./Components/LeftBlock/LeftBlock";
import RightBlock from "./Components/RightBlock/RightBlock";

let text = "test variable";

function App() {
  return (
   
      <div className="App">
        <LeftBlock />
        <div className="line"></div>
        <RightBlock />
      </div>

  );
}

export default App;
