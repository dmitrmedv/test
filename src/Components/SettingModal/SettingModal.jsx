import { useId } from "react";
import css from "./SettingModal.module.css";

const SettingModal = () => {
  const nameId = useId();
  const emailId = useId();
  const weightId = useId();
  const timeId = useId();
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
        <div className={css.formBlock}>
          <div className={css.formField}>
            <label htmlFor={nameId}> Your name</label>
            <input type="text" name="name" id={nameId} />
          </div>
          <div className={css.formField}>
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
          <p className={css.mainText}>
            <svg width="18" height="18">
              <use href="../../../public/img/symbol-defs.svg#icon-mark"></use>
            </svg>
            Active time in hours
          </p>
        </div>
        <div className={css.formBlock}>
          <div className={css.formField}>
            <label htmlFor={nameId}>Your weight in kilograms:</label>
            <input type="number" name="weight" id={weightId} />
          </div>
          <div className={css.formField}>
            <label htmlFor={emailId}>
              The time of active participation in sports:
            </label>
            <input type="number" name="time" id={timeId} />
          </div>
        </div>
        <p>The required amount of water in liters per day:</p>
        <p>1.8 L</p>
        <div className={css.formField}>
          <label htmlFor={emailId}>
            Write down how much water you will drink:
          </label>
          <input type="number" name="time" id={timeId} />
        </div>
      </form>
      <button type="button">Save</button>
    </div>
  );
};

export default SettingModal;
