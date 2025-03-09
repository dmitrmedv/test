import { useId } from "react";
import css from "./SettingModal.module.css";

const SettingModal = () => {
  const nameId = useId();
  const emailId = useId();
  return (
    <div className={css.modalBoby}>
      <h2 className={css.title}>Setting</h2>
      <div className={css.avatarBlock}>
        <div className={css.avatarWrapper}>
          <img src="../../../public/img/photo.jpeg" alt="avatar" />
        </div>
        <button type="button" className={css.uploadBtn}>
          <svg width="18" height="18">
            <use href="../../../public/img/symbol-defs.svg#icon-upload"></use>
          </svg>
          Upload a photo
        </button>
      </div>
      <form className={css.infoBlock}>
        <div className={css.genderBlock}>
          <p className={css.formTitle}>Your gender identity</p>
          <div className={css.radioBtns}>
            <label>
              <input type="radio" name="gender" value="woman" />
              <span className={css.customRadio}></span>
              Woman
            </label>
            <label>
              <input type="radio" name="gender" value="man" />
              <span className={css.customRadio}></span>
              Man
            </label>
          </div>
        </div>
        <div className={css.nameBlock}>
          <div className={css.nameField}>
            <label htmlFor={nameId}> Your name</label>
            <input type="text" name="name" id={nameId} />
          </div>
          <div className={css.nameField}>
            <label htmlFor={emailId}>Email</label>
            <input type="email" name="mail" id={emailId} />
          </div>
        </div>
        <div className={css.normaBlock}>
          <p className={css.formTitle}>My daily norma</p>
          <div className={css.formulaBlock}>
            <p className={css.normaTitle}>For woman:</p>
            <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
          </div>
          <div>
            <p className={css.normaTitle}>For man:</p>
            <p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
          </div>
          <div className={css.formulaInfo}>
            <p className={css.text}>
              <span className={css.asterisk}>*</span> V is the volume of the
              water norm in liters per day, M is your body weight, T is the time
              of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>
          </div>
          <p>
            <svg width="18" height="18">
              <use href="../../../public/img/symbol-defs.svg#icon-mark"></use>
            </svg>
            Active time in hours
          </p>
          <div className={css.formulaInfo}>
            <p className={css.text}>
              <span className={css.asterisk}>*</span> V is the volume of the
              water norm in liters per day, M is your body weight, T is the time
              of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>
          </div>{" "}
          <div className={css.formulaInfo}>
            <p className={css.text}>
              <span className={css.asterisk}>*</span> V is the volume of the
              water norm in liters per day, M is your body weight, T is the time
              of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>
          </div>{" "}
          <div className={css.formulaInfo}>
            <p className={css.text}>
              <span className={css.asterisk}>*</span> V is the volume of the
              water norm in liters per day, M is your body weight, T is the time
              of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>
          </div>{" "}
          <div className={css.formulaInfo}>
            <p className={css.text}>
              <span className={css.asterisk}>*</span> V is the volume of the
              water norm in liters per day, M is your body weight, T is the time
              of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>
          </div>{" "}
          <div className={css.formulaInfo}>
            <p className={css.text}>
              <span className={css.asterisk}>*</span> V is the volume of the
              water norm in liters per day, M is your body weight, T is the time
              of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>
          </div>{" "}
          <div className={css.formulaInfo}>
            <p className={css.text}>
              <span className={css.asterisk}>*</span> V is the volume of the
              water norm in liters per day, M is your body weight, T is the time
              of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>
          </div>{" "}
        </div>
      </form>
    </div>
  );
};

export default SettingModal;
