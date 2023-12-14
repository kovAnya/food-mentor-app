import css from "./Header.module.css";
import logo from "/icon.svg";

export const Header = () => {
  return (
    <header className={css.header}>
      <a className={css.header_logo} href="/food-mentor-app">
        <div className={css.header_logo_wrpr}>
          <img className={css.header_logo_img} src={logo} alt="Food mentor" />
        </div>
        <span>Food mentor</span>
      </a>
    </header>
  );
};
