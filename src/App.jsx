import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./Pages/LayOut/LayOut";
import Home from "./Pages/Home/Home";
import Counter from "./Components/Counter/Counter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
