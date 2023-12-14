import css from "./ProgressBar.module.css";
import { useState, useEffect } from "react";

export const ProgressBar = ({ currentPage }) => {
  const [progress, setProgress] = useState(2);

  useEffect(() => {
    switch (currentPage) {
      case 0:
        setProgress(2);
        break;
      case 1:
        setProgress(25);
        break;
      case 2:
        setProgress(50);
        break;
      case 3:
        setProgress(75);
        break;
      case 4:
        setProgress(100);
        break;
      default:
        setProgress(2);
    }
  }, [currentPage]);

  return (
    <div
      className={css.bar}
      style={{
        background: `linear-gradient(to right, var(--color-brand-main) ${progress}%, var(--color-grey-50) ${progress}% 100%)`,
        "--before-progress": `${progress}%`,
      }}
    ></div>
  );
};
