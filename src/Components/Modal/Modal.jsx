import { useEffect } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({ children, toggleModal, position }) => {
  const modalRoot = document.querySelector("#modal-root");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code !== "Escape") {
        return;
      }
      toggleModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  const handleClickBackdrop = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    toggleModal();
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleClickBackdrop}>
      <div
        className={`${css.modalContent} ${
          position === "top" ? css.topPosition : ""
        }`}
      >
        <button type="button" className={css.closeBtn} onClick={toggleModal}>
          <svg width="24" height="24">
            <use href="../../../public/img/symbol-defs.svg#icon-x"></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
