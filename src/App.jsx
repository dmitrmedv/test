import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./Pages/LayOut/LayOut";
import Home from "./Pages/Home/Home";
import Counter from "./Components/Counter/Counter";
import Search from "./Pages/Search/Search";
// import { slice } from "./redux/todo/todoSlice";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { selectedToDo } from "./redux/todo/selectors";

function App() {
  // console.log(slice);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(selectedToDo);
  // });

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
