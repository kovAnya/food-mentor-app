import css from "./Layout.module.css";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <Header />
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  );
};
