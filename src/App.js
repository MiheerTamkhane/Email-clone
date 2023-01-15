import { CardList, Canvas } from "./components";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const filter = useSelector((state) => state.allFilters);
  return (
    <div className="app">
      <div className="container">
        <CardList />
        {filter?.byStatus?.length > 0 && <Canvas />}
      </div>
    </div>
  );
}

export default App;
