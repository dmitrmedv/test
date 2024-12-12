import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./Pages/LayOut/LayOut";
import Home from "./Pages/Home/Home";
import Counter from "./Components/Counter/Counter";
import Search from "./Pages/Search/Search";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchAll } from "./redux/todo/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
