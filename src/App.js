import Pages from "./Pages/Pages";
import Search from "./Components/Search";
import Cuisine from "./Components/Cuisine";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search/>
      <Cuisine/>
      <Pages/>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
