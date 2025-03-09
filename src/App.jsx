import Modal from "./Components/Modal/Modal";
import SettingModal from "./Components/SettingModal/SettingModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./redux/modalSlice";
import LogOutModal from "./Components/LogOutModal/LogOutModal";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.isOpen);

  const [position, setPosition] = useState(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(toggleModal("settings"), setPosition("top"))}
      >
        Open Setting Modal
      </button>
      <button
        type="button"
        onClick={() => dispatch(toggleModal("logout"), setPosition(null))}
      >
        Open LogOut Modal
      </button>
      {isOpen && (
        <Modal toggleModal={() => dispatch(toggleModal())} position={position}>
          {isOpen === "settings" && <SettingModal />}
          {isOpen === "logout" && <LogOutModal />}
        </Modal>
      )}
    </>
  );
}

export default App;
