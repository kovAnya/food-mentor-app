import css from "./ProgressBar.module.css";

export const ProgressBar = ({ progress = 5 }) => {
  return (
    <div
      className={css.bar}
      style={{
        background: `linear-gradient(to right, var(--color-brand-main) ${progress}%, var(--color-grey-50) ${progress}% 100%)`,
        "--before-progress": `${progress}vw`,
      }}
    ></div>
  );
};
