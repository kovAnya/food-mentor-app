import css from "./BackButton.module.css";

export const BackButton = ({ handlePrev }) => {
  return (
    <button
      onClick={() => handlePrev()}
      type="button"
      aria-label="back"
      className={css.btn}
    >
      Back to previous step
    </button>
  );
};
