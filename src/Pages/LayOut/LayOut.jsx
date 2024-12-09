import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

const LayOut = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayOut;
